const { EstadoCivil } = require('../../../store/db');
const { registrarBitacora } = require('../../../utils/bitacora_cambios');
const moment = require('moment');
const { validarpermiso } = require('../../../auth');
const MenuId=4;
const Modelo = EstadoCivil;
const tabla = 'cat_estado_civil';
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

list = async (req) => {
    let autorizado=await validarpermiso(req,MenuId,3);
    if(autorizado!==true){
        return autorizado;
    }
    
    if (!req.query.id && !req.query.estadoId) {
        response.code = 1;
        response.data = await Modelo.findAll();
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
        response.data = await Modelo.findAll({ where: query});
        return response;
    } else {
        if (Number(id) > 0) {
            query.estado_civilId = Number(id);
            response.code = 1;
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

module.exports = {
    list,
    update,
    insert
}