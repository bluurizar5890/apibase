const { RolMenuAcceso, Rol, Menu, MenuAcceso,Acceso, Estado } = require('../../../store/db');
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
    const{rolId,menu_accesoId}=req.body;
    const dataActual = await Modelo.findOne({
        where: { rolId,menu_accesoId }
    });

    if(!dataActual){
        const result = await Modelo.create(req.body);
        response.code = 1;
        response.data = result;
    }else{
        response.code = -1;
        response.data = "El rol ya tiene asignado el acceso";
    }
    return response;
}


list = async (req) => {
    let autorizado = await validarpermiso(req, MenuId, 3);
    if (autorizado !== true) {
        return autorizado;
    }

    const{rolId}=req.query;

    let prueba =await RolMenuAcceso.findAll({
            include: [{
                model: MenuAcceso,
                required: true,
                include: [
                    {
                    model: Menu,
                    required: true,
                    attributes: ['menuId','menu_padreId','descripcion', 'estadoId'],
                },
                {
                    model: Acceso,
                    required: true,
                    attributes: ['accesoId', 'descripcion', 'estadoId'],
                }
            ]
            },{
                model: Estado,
                required: true,
                attributes: ['descripcion'],
            }],
            where:{rolId},
            order:[
                ['rol_menu_accesoId','ASC']
            ]
    });
    response.code = 1;
    response.data = prueba;
    return response;
}

const update = async (req) => {
    let autorizado = await validarpermiso(req, MenuId, 2);
    if (autorizado !== true) {
        return autorizado;
    }
    const { rol_menu_accesoId,menu_accesoId } = req.body;
    const dataAnterior = await Modelo.findOne({
        where: { rol_menu_accesoId }
    });


    if (dataAnterior) {
        const {menu_accesoId:menu_accesoIdActual,rolId }=dataAnterior;

        const validarAcceso = await Modelo.findOne({
            where: { menu_accesoId,rolId }
        });

        if(validarAcceso && menu_accesoId!==menu_accesoIdActual){
            response.code = 0;
            response.data = "El acceso que intenta actualizar, el rol ya lo tiene asignado por favor verifique";
            return response;
        }

        const resultado = await Modelo.update(req.body, {
            where: {
                rol_menu_accesoId
            }
        });
        if (resultado > 0) {
            let { usuarioId } = req.user;
            req.body.usuario_ult_mod = usuarioId;
            await registrarBitacora(tabla, rol_menu_accesoId, dataAnterior.dataValues, req.body);

            //Actualizar fecha de ultima modificacion
            let fecha_ult_mod = moment(new Date()).format('YYYY/MM/DD HH:mm');
            const data = {
                fecha_ult_mod,
                usuario_ult_mod:usuarioId
            }
            const resultadoUpdateFecha = await Modelo.update(data, {
                where: {
                    rol_menu_accesoId,
                }
            });

            response.code = 1;
            response.data = "Información Actualizado exitosamente";
            return response;
        } else {
            response.code = 0;
            response.data = "No existen cambios para aplicar";
            return response;
        }
    } else {
        response.code = -1;
        response.data = "No existe información para actualizar con los parametros especificados";
        return response;
    }
};

const eliminar = async (req) => {
    let autorizado = await validarpermiso(req, MenuId, 4);
    if (autorizado !== true) {
        return autorizado;
    }
    let rol_menu_accesoId = req.params.id;
    const dataAnterior = await Modelo.findOne({
        where: { rol_menu_accesoId }
    });

    const dataEliminar = {
        estadoId: 3
    };
    if (dataAnterior) {
        const resultado = await Modelo.update(dataEliminar, {
            where: {
                rol_menu_accesoId
            }
        });
        if (resultado > 0) {
            let { usuarioId } = req.user;
            dataEliminar.usuario_ult_mod = usuarioId;
            await registrarBitacora(tabla, rol_menu_accesoId, dataAnterior.dataValues, dataEliminar);

            //Actualizar fecha de ultima modificacion
            let fecha_ult_mod = moment(new Date()).format('YYYY/MM/DD HH:mm');
            const data = {
                fecha_ult_mod,
                usuario_ult_mod: usuarioId
            }
            const resultadoUpdateFecha = await Modelo.update(data, {
                where: {
                    rol_menu_accesoId
                }
            });

            response.code = 1;
            response.data = "Elemento eliminado exitosamente";
            return response;
        } else {
            response.code = -1;
            response.data = "No fue posible eliminar el elemento";
            return response;
        }
    } else {
        response.code = -1;
        response.data = "No existe información para eliminar con los parametros especificados";
        return response;
    }
}

module.exports = {
    list,
    update,
    insert,
    eliminar
}