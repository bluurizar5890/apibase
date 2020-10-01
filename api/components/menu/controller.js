const { Menu, Estado, bd } = require('../../../store/db');
const { registrarBitacora } = require('../../../utils/bitacora_cambios');
const moment = require('moment');
const { validarpermiso } = require('../../../auth');
const { QueryTypes } = require('sequelize');
const MenuId=21;
const Modelo = Menu;
const tabla = 'cat_menu';
let response = {};

const insert = async (req) => {
    let autorizado=await validarpermiso(req,MenuId,1);
    if(autorizado!==true){
        return autorizado;
    }
    
    let { usuarioId } = req.user;
    req.body.usuario_crea = usuarioId;
    const result = await Modelo.create(req.body);
    response.code = 1;
    response.data = result;
    return response;
}

const consultar = async (query, include = 1) => {
    if (include == 1) {
        console.log(query);
        if (query) {
            return await Modelo.findAll({
                include: [{
                    model: Estado,
                    required: true,
                    attributes: ['descripcion'],
                }],
                where: [query],
                order: [
                    ['menuId', 'ASC']
                ]
            });
        } else {
            return await Modelo.findAll({
                include: [{
                    model: Estado,
                    required: true,
                    attributes: ['descripcion'],
                }],
                order: [
                    ['menuId', 'ASC']
                ]
            });
        }
    } else {
        if (query) {
            return await Modelo.findAll({ where: query });
        } else {
            return await Modelo.findAll();
        }
    }
}

list = async (req) => {
    let autorizado=await validarpermiso(req,MenuId,3);
    if(autorizado!==true){
        return autorizado;
    }

    const { include } = req.query;
    if (!req.query.id && !req.query.estadoId) {
        response.code = 1;
        response.data = await consultar(null,include);
        return response;
    }

    const { id, estadoId } = req.query;
    let query = {};
    if (estadoId) {
        let estados = estadoId.split(';');
        let arrayEstado = new Array();
        estados.map((item) => {
            arrayEstado.push(Number(item));
        });
        query.estadoId = arrayEstado;
    }

    if (!id) {
        response.code = 1;
        response.data =  await consultar(query,include);
        return response;
    } else {
        if (Number(id) > 0) {
            query.menuId = Number(id);
            response.code = 1;
            response.data = await consultar(query,include);
            return response;
        } else {
            response.code = -1;
            response.data = "Debe de especificar un codigo";
            return response;
        }
    }
}


const update = async (req) => {
    let autorizado=await validarpermiso(req,MenuId,2);
    if(autorizado!==true){
        return autorizado;
    }
    const { menuId } = req.body;
    const dataAnterior = await Modelo.findOne({
        where: { menuId }
    });


    if (dataAnterior) {
        const resultado = await Modelo.update(req.body, {
            where: {
                menuId
            }
        });
        if (resultado > 0) {
            let { usuarioId } = req.user;
            req.body.usuario_ult_mod = usuarioId;
            await registrarBitacora(tabla, menuId, dataAnterior.dataValues, req.body);

            //Actualizar fecha de ultima modificacion
            let fecha_ult_mod = moment(new Date()).format('YYYY/MM/DD HH:mm');
            const data = {
                fecha_ult_mod,
                usuario_ult_mod:usuarioId
            }
            const resultadoUpdateFecha = await Modelo.update(data, {
                where: {
                    menuId
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
    let menuId = req.params.id;
    const dataAnterior = await Modelo.findOne({
        where: { menuId }
    });

    const dataEliminar = {
        estadoId: 3
    };
    if (dataAnterior) {
        const resultado = await Modelo.update(dataEliminar, {
            where: {
                menuId
            }
        });
        if (resultado > 0) {
            let { usuarioId } = req.user;
            dataEliminar.usuario_ult_mod = usuarioId;
            await registrarBitacora(tabla, menuId, dataAnterior.dataValues, dataEliminar);

            //Actualizar fecha de ultima modificacion
            let fecha_ult_mod = moment(new Date()).format('YYYY/MM/DD HH:mm');
            const data = {
                fecha_ult_mod,
                usuario_ult_mod: usuarioId
            }
            const resultadoUpdateFecha = await Modelo.update(data, {
                where: {
                    menuId
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

const listmenu = async (req) => {
    let autorizado=await validarpermiso(req,MenuId,3);
    if(autorizado!==true){
        return autorizado;
    }
    const {usuarioId}=req.user;
    const menuUsuario = await bd.query(`select distinct a.menuId,a.posicion,a.descripcion,a.href,a.icono,a.menu_padreId from cat_menu a
                inner join menu_acceso b
                on a.menuId=b.menuId and a.estadoId=1 and b.estadoId=1 and a.visible=1
                inner join rol_menu_acceso c
                on b.menu_accesoId=c.menu_accesoId and c.estadoId
                inner join usuario_rol d
                on c.rolId=d.rolId and d.estadoId=1
                where d.usuarioId=${usuarioId} order by a.posicion;`, {
        type: QueryTypes.SELECT
    });

    let listPrincipales = menuUsuario.filter(i => i.menu_padreId === 0);
    let menu = [];
    listPrincipales.map(({ menuId: id, posicion, descripcion: title, icono: ico }) => {

        let listHijos = menuUsuario.filter(i => i.menu_padreId === id);
        let childrens = [];
        listHijos.map((item) => {
            let menuHijo = {
                id: item.menuId,
                title: item.descripcion,
                type: 'item',
                url: item.href,
                classes: 'nav-item'
            }
            childrens.push(menuHijo);
        })

        let menuItem = {
            id,
            title,
            type: 'collapse',
            ico,
            children: childrens
        }
        menu.push(menuItem);
    });

    response.code=1;
    response.data=menu;
    return response;
}

module.exports = {
    list,
    update,
    insert,
    eliminar,
    listmenu
}