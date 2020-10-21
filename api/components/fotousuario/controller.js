const { Estado, FotoUsuario } = require('../../../store/db');
const { registrarBitacora } = require('../../../utils/bitacora_cambios');
const moment = require('moment');
const { validarpermiso } = require('../../../auth');
const data = require('../../../store/data');
const MenuId=4;
const Modelo = FotoUsuario;
const tabla = 'foto_usuario';
let response = {};


const insert = async (req) => {
    let autorizado=await validarpermiso(req,MenuId,1);
    if(autorizado!==true){
        return autorizado;
    }
    const dataAux={};
    let {usuarioId,descripcion}=req.body;
    let {file}=req;
    dataAux.descripcion=descripcion;
    dataAux.usuarioId=usuarioId;
    dataAux.foto=file.buffer;
    dataAux.mimetype=file.mimetype;
    dataAux.nombre=file.originalname;
    let { usuarioId:usuarioCrea } = req.user;
    dataAux.usuario_crea = usuarioCrea;
    const result = await Modelo.create(dataAux);
    delete result.dataValues.foto;
    response.code = 1;
    response.data = result;
    return response;
}

const consultar = async (query, include = 1) => {
    if (include == 1) {
        if (query) {
            return await Modelo.findAll({
                include: [{
                    model: Estado,
                    as:"Estado",
                    required: true,
                    attributes: ['descripcion'],
                }],
                where: [query],
                order: [
                    ['estado_civilId', 'ASC']
                ]
            });
        } else {
            return await Modelo.findAll({
                include: [{
                    model: Estado,
                    as:"Estado",
                    required: true,
                    attributes: ['descripcion'],
                }],
                order: [
                    ['estado_civilId', 'ASC']
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

    const { id, estadoId} = req.query;
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
        response.data = await consultar(query,include);
        return response;
    } else {
        if (Number(id) > 0) {
            query.estado_civilId = Number(id);
            response.code = 1;
            response.data =  await consultar(query,include);
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
    const { estado_civilId } = req.body;
    const dataAnterior = await Modelo.findOne({
        where: { estado_civilId }
    });


    if (dataAnterior) {
        const resultado = await Modelo.update(req.body, {
            where: {
                estado_civilId
            }
        });
        if (resultado > 0) {
            let { usuarioId } = req.user;
            req.body.usuario_ult_mod = usuarioId;
             await registrarBitacora(tabla, estado_civilId, dataAnterior.dataValues, req.body);

            //Actualizar fecha de ultima modificacion
            let fecha_ult_mod = moment(new Date()).format('YYYY/MM/DD HH:mm');
            const data = {
                fecha_ult_mod,
                usuario_ult_mod:usuarioId
            }
            const resultadoUpdateFecha = await Modelo.update(data, {
                where: {
                    estado_civilId
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
    let estado_civilId = req.params.id;
    const dataAnterior = await Modelo.findOne({
        where: { estado_civilId }
    });

    const dataEliminar = {
        estadoId: 3
    };
    if (dataAnterior) {
        const resultado = await Modelo.update(dataEliminar, {
            where: {
                estado_civilId
            }
        });
        if (resultado > 0) {
            let { usuarioId } = req.user;
            dataEliminar.usuario_ult_mod = usuarioId;
            await registrarBitacora(tabla, estado_civilId, dataAnterior.dataValues, dataEliminar);

            //Actualizar fecha de ultima modificacion
            let fecha_ult_mod = moment(new Date()).format('YYYY/MM/DD HH:mm');
            const data = {
                fecha_ult_mod,
                usuario_ult_mod: usuarioId
            }
            const resultadoUpdateFecha = await Modelo.update(data, {
                where: {
                    estado_civilId
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