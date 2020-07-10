const { IdentificacionPersona } = require('../../../store/db');
const { registrarBitacora } = require('../../../utils/bitacora_cambios');
const moment = require('moment');
const { validarpermiso } = require('../../../auth');
const MenuId=13;
const Modelo = IdentificacionPersona;
const tabla = 'identificacion_persona';
let response = {};


const insert = async (req) => {
    let autorizado=await validarpermiso(req,MenuId,1);
    if(autorizado!==true){
        return autorizado;
    }
    
    let { usuarioId } = req.user;
    req.body.usuario_crea = usuarioId;
    const result = await Modelo.create(req.body);
    response.code = 0;
    response.data = result;
    return response;
}


list = async (req) => {
    let autorizado=await validarpermiso(req,MenuId,3);
    if(autorizado!==true){
        return autorizado;
    }
    
    if (!req.query.id && !req.query.estadoId && !req.query.personaId && !req.query.tipodocumentoId) {
        response.code = 0;
        response.data = await Modelo.findAll();
        return response;
    }

    const { id, estadoId,personaId,tipodocumentoId} = req.query;
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

    if(tipodocumentoId){
        query.tipo_documentoId=tipodocumentoId;
    }


    if (!id) {
        response.code = 0;
        response.data = await Modelo.findAll({ where: query});
        return response;
    } else {
        if (Number(id) > 0) {
            query.identificacion_personaId = Number(id);
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

const update = async (req) => {
    let autorizado=await validarpermiso(req,MenuId,2);
    if(autorizado!==true){
        return autorizado;
    }
    const { identificacion_personaId } = req.body;
    const dataAnterior = await Modelo.findOne({
        where: { identificacion_personaId }
    });


    if (dataAnterior) {
        let { usuarioId } = req.user;
        req.body.usuario_ult_mod = usuarioId;
        const resultado = await Modelo.update(req.body, {
            where: {
                identificacion_personaId
            }
        });
        if (resultado > 0) {
            await registrarBitacora(tabla, identificacion_personaId, dataAnterior.dataValues, req.body);

            //Actualizar fecha de ultima modificacion
            let fecha_ult_mod = moment(new Date()).format('YYYY/MM/DD HH:mm');
            const data = {
                fecha_ult_mod
            }
            const resultadoUpdateFecha = await Modelo.update(data, {
                where: {
                    personaId
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