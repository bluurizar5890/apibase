const { Usuario } = require('../../../store/db');
const { registrarBitacora } = require('../../../utils/bitacora_cambios');
const bcrypt = require('bcrypt')
const { validarpermiso } = require('../../../auth');
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
    let { usuarioId } = req.user;
    dataUsuario.usuario_crea = usuarioId;
    const password=dataUsuario.password;
    dataUsuario.password= bcrypt.hashSync(password, 10);
    const result = await Modelo.create(dataUsuario);
    response.code = 0;
    response.data = result;
    return response;
}

list = async (req) => {
    let autorizado=await validarpermiso(req,MenuId,3);
    if(autorizado!==true){
        return autorizado;
    }
    
    if (!req.query.id && !req.query.estadoId && !req.query.personaId && !req.query.email) {
        response.code = 0;
        response.data = await Modelo.findAll();
        return response;
    }

    const { id, estadoId,personaId,email } = req.query;
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

    if(email){
        query.email=email;
    }

    if (!id) {
        response.code = 0;
        response.data = await Modelo.findAll({ where: query });
        return response;
    } else {
        if (Number(id) > 0) {
            query.usuarioId = Number(id);
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
    const { usuarioId } = req.body;
    const dataAnterior = await Modelo.findOne({
        where: { usuarioId }
    });


    if (dataAnterior) {
        const resultado = await Modelo.update(req.body, {
            where: {
                usuarioId
            }
        });
        if (resultado > 0) {
            await registrarBitacora(tabla, usuarioId, dataAnterior.dataValues, req.body);
            //Actualizar fecha de ultima modificacion
            let fecha_ult_mod = moment(new Date()).format('YYYY/MM/DD HH:mm');
            const data = {
                fecha_ult_mod
            }
            const resultadoUpdateFecha = await Modelo.update(data, {
                where: {
                    usuarioId
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
    insert,
    update
}