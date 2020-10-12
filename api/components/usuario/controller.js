const { Usuario, Estado, Persona } = require('../../../store/db');
const { registrarBitacora } = require('../../../utils/bitacora_cambios');
const bcrypt = require('bcrypt')
const { validarpermiso } = require('../../../auth');
const moment = require('moment');
const MenuId=17;
const Modelo = Usuario;
const tabla = 'usuario';
let response = {};

const insert = async (req) => {
    let autorizado=await validarpermiso(req,MenuId,1);
    if(autorizado!==true){
        return autorizado;
    }
    
    const dataUsuario=req.body;
    let { usuarioId} = req.user;

    const { dias_cambio_password } = req.body;
    if(dias_cambio_password===0){
        delete req.body.fecha_cambio_password;
    }
    dataUsuario.usuario_crea = usuarioId;
    const password=dataUsuario.password;
    dataUsuario.password= bcrypt.hashSync(password, 10);
    const result = await Modelo.create(dataUsuario);
    response.code = 1;
    response.data = result;
    return response;
}

const consultar = async (query, include = 1) => {
    if (include == 1) {
        if (query) {
            return await Modelo.findAll({
                include: [
                    {
                    model: Persona,
                    required: true,
                    as: "Persona",
                    attributes: ['nombre1','nombre2','nombre_otros','apellido1','apellido2','apellido_casada','email']
                },{
                    model: Estado,
                    as: "Estado",
                    required: true,
                    attributes: ['descripcion']
                }],
                where: [query],
                order: [
                    ['usuarioId', 'ASC']
                ],
                attributes: ['usuarioId','personaId','user_name','fecha_cambio_password','fecha_crea','estadoId','forzar_cambio_password','dias_cambio_password']
            });
        } else {
            return await Modelo.findAll({
                include: [{
                    model: Persona,
                    required: true,
                    as: "Persona",
                    attributes: ['nombre1','nombre2','nombre_otros','apellido1','apellido2','apellido_casada','email']
                },{
                    model: Estado,
                    as: "Estado",
                    required: true,
                    attributes: ['descripcion']
                }],
                order: [
                    ['usuarioId', 'ASC']
                ],
                attributes: ['usuarioId','personaId','user_name','fecha_cambio_password','fecha_crea','estadoId','forzar_cambio_password','dias_cambio_password']
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
    const {include}=req.query;
    if (!req.query.id && !req.query.estadoId && !req.query.personaId) {
        response.code = 1;
        response.data = await consultar(null,include);
        return response;
    }

    const { id, estadoId,personaId} = req.query;
    let query = {};
    if (estadoId) {
        let estados = estadoId.split(';');
        let arrayEstado = new Array();
        estados.map((item) => {
            arrayEstado.push(Number(item));
        });
        query.estadoId = arrayEstado;
    }

    if(personaId){
        query.personaId=personaId;
    }


    if (!id) {
        response.code = 1;
        response.data =await consultar(query,include);
        return response;
    } else {
        if (Number(id) > 0) {
            query.usuarioId = Number(id);
            response.code = 1;
            response.data =await consultar(query,include);
            return response;
        } else {
            response.code = -1;
            response.data = "Debe de especificar un codigo";
            return response;
        }
    }
}

const eliminar = async (req) => {
    let autorizado = await validarpermiso(req, MenuId, 4);
    if (autorizado !== true) {
        return autorizado;
    }
    let usuarioId = req.params.id;
    const dataAnterior = await Modelo.findOne({
        where: { usuarioId }
    });

    const dataEliminar = {
        estadoId: 3
    };
    if (dataAnterior) {
        const resultado = await Modelo.update(dataEliminar, {
            where: {
                usuarioId
            }
        });
        if (resultado > 0) {
            let { usuarioId:usuarioIdReq } = req.user;
            dataEliminar.usuario_ult_mod = usuarioIdReq;
            await registrarBitacora(tabla, usuarioId, dataAnterior.dataValues, dataEliminar);

            //Actualizar fecha de ultima modificacion
            let fecha_ult_mod = moment(new Date()).format('YYYY/MM/DD HH:mm');
            const data = {
                fecha_ult_mod,
                usuario_ult_mod: usuarioIdReq
            }
            const resultadoUpdateFecha = await Modelo.update(data, {
                where: {
                    usuarioId
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

const update = async (req) => {
    let autorizado=await validarpermiso(req,MenuId,2);
    if(autorizado!==true){
        return autorizado;
    }
    const { usuarioId } = req.body;
    const dataAnterior = await Modelo.findOne({
        where: { usuarioId }
    });


    if (dataAnterior) {
        delete req.body.user_name;
        const password=req.body.password;
        if(password){
        req.body.password= bcrypt.hashSync(password, 10);
        }
        const resultado = await Modelo.update(req.body, {
            where: {
                usuarioId
            }
        });
        if (resultado > 0) {
            let { usuarioId:usuarioIdReq } = req.user;
            req.body.usuario_ult_mod = usuarioIdReq;
            await registrarBitacora(tabla, usuarioId, dataAnterior.dataValues, req.body);
            //Actualizar fecha de ultima modificacion
            let fecha_ult_mod = moment(new Date()).format('YYYY/MM/DD HH:mm');
            const data = {
                fecha_ult_mod,
                usuario_ult_mod:usuarioIdReq
            }
            const resultadoUpdateFecha = await Modelo.update(data, {
                where: {
                    usuarioId
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
const actualizarPassword = async (req) => {
    let autorizado=await validarpermiso(req,MenuId,2);
    if(autorizado!==true){
        return autorizado;
    }
    const { usuarioId } = req.user;
    const dataAnterior = await Modelo.findOne({
        where: { usuarioId }
    });


    if (dataAnterior) {
        const password=req.body.password;
        let dataUpdate={};
        if(password){
            dataUpdate.password= bcrypt.hashSync(password, 10);
        }
        const resultado = await Modelo.update(dataUpdate, {
            where: {
                usuarioId
            }
        });
        if (resultado > 0) {
            let { usuarioId:usuarioIdReq } = req.user;
            req.body.usuario_ult_mod = usuarioIdReq;
            await registrarBitacora(tabla, usuarioId, dataAnterior.dataValues, req.body);
            //Actualizar fecha de ultima modificacion
            let fecha_ult_mod = moment(new Date()).format('YYYY/MM/DD HH:mm');
            const data = {
                fecha_ult_mod,
                usuario_ult_mod:usuarioIdReq
            }
            const resultadoUpdateFecha = await Modelo.update(data, {
                where: {
                    usuarioId
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
module.exports = {
    list,
    insert,
    update,
    eliminar,
    actualizarPassword
}