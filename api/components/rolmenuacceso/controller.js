const { RolMenuAcceso, Rol, Menu, MenuAcceso,Acceso } = require('../../../store/db');
const { registrarBitacora } = require('../../../utils/bitacora_cambios');
const moment = require('moment');
const { validarpermiso } = require('../../../auth');
const { Accesos } = require('../../../store/data');
const MenuId = 20;
const Modelo = RolMenuAcceso;
const tabla = 'rol_menu_acceso';
let response = {};


const insert = async (req) => {
    let autorizado = await validarpermiso(req, MenuId, 1);
    if (autorizado !== true) {
        return autorizado;
    }

    let { usuarioId } = req.user;
    req.body.usuario_crea = usuarioId;
    const result = await Modelo.create(req.body);
    response.code = 0;
    response.data = result;
    return response;
}

/*
list = async (req) => {
    let autorizado=await validarpermiso(req,MenuId,3);
    if(autorizado!==true){
        return autorizado;
    }
    
    if (!req.query.id && !req.query.estadoId && !req.query.rolId && !req.query.menu_accesoId) {
        response.code = 0;
        response.data = await Modelo.findAll();
        return response;
    }

    const { id, estadoId,rolId,menu_accesoId } = req.query;
    let query = {};
    if (estadoId) {
        let estados = estadoId.split(';');
        let arrayEstado = new Array();
        estados.map((item) => {
            arrayEstado.push(Number(item));
        });
        query.estadoId = arrayEstado;
    }

    if(rolId){
        query.rolId=rolId;
    }

    if(menu_accesoId){
        query.menu_accesoId=menu_accesoId;
    }

    if (!id) {
        response.code = 0;
        response.data = await Modelo.findAll({ where: query});
        return response;
    } else {
        if (Number(id) > 0) {
            query.rol_menu_accesoId = Number(id);
            response.code = 0;
            response.data = await Modelo.findOne({ where: query });
            return response;
        } else {
            response.code = -1;
            response.data = "Debe de especificar un codigo";
            return response;
        }
    }
}
*/
list = async (req) => {
    let autorizado = await validarpermiso(req, MenuId, 3);
    if (autorizado !== true) {
        return autorizado;
    }


    Rol.hasMany(RolMenuAcceso, { foreignKey: 'rolId' });
    RolMenuAcceso.hasMany(MenuAcceso, { foreignKey: 'menu_accesoId' });
    MenuAcceso.hasOne(Menu, { foreignKey: 'menuId' });


    let prueba =await Rol.findAll({
        include: [{
            model: RolMenuAcceso,
            required: true,
            include: [{
                model: MenuAcceso,
                required: true,
                include: [{
                    model: Menu,
                    required: true,
                }]
            }]
        }]
    });
    response.code = 0;
    response.data = prueba;
    return response;
}

const update = async (req) => {
    let autorizado = await validarpermiso(req, MenuId, 2);
    if (autorizado !== true) {
        return autorizado;
    }
    const { rol_menu_accesoId } = req.body;
    const dataAnterior = await Modelo.findOne({
        where: { rol_menu_accesoId }
    });


    if (dataAnterior) {
        let { usuarioId } = req.user;
        req.body.usuario_ult_mod = usuarioId;
        const resultado = await Modelo.update(req.body, {
            where: {
                rol_menu_accesoId
            }
        });
        if (resultado > 0) {
            await registrarBitacora(tabla, rol_menu_accesoId, dataAnterior.dataValues, req.body);

            //Actualizar fecha de ultima modificacion
            let fecha_ult_mod = moment(new Date()).format('YYYY/MM/DD HH:mm');
            const data = {
                fecha_ult_mod
            }
            const resultadoUpdateFecha = await Modelo.update(data, {
                where: {
                    rol_menu_accesoId
                }
            });

            response.code = 0;
            response.data = "Información Actualizado exitosamente";
            return response;
        } else {
            response.code = -1;
            response.data = "No existen cambios para aplicar";
            return response;
        }
    } else {
        response.code = -1;
        response.data = "No existe información para actualizar con los parametros especificados";
        return response;
    }
};

module.exports = {
    list,
    update,
    insert
}