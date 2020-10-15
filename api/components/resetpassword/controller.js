const { ResetPassWord, Parametro } = require('../../../store/db');
const { registrarBitacora } = require('../../../utils/bitacora_cambios');
const moment = require('moment');
const Correo = require('../../../utils/EnviarCorreo');
const { htmlResetPassword } = require('../../../utils/plantillasCorreo/ResetPassword');
const tabla = 'reset_password';
let response = {};


const getConfiguracionEmail = async () => {
    const parametros = await Parametro.findAll(
        {
            where: { 'nombreGrupo': 'CONFIG_EMISOR', estadoId: [1] },
            attributes: ['tipoDato', 'nombreVariable', 'valor']
        });
    const { valor: host } = parametros.find(item => item.nombreVariable === "hostEmailEmisor");
    const { valor: port } = parametros.find(item => item.nombreVariable === "portHostEmisor");
    const { valor: secure } = parametros.find(item => item.nombreVariable === "secureHostEmisor");
    const { valor: user } = parametros.find(item => item.nombreVariable === "emailEmisor");
    const { valor: pass } = parametros.find(item => item.nombreVariable === "passwordEmisor");
    const config = {};
    config.host = host;
    config.port = Number(port);
    config.secure = Boolean(secure);
    config.user = user;
    config.pass = pass;
    return config;
}

const prueba = async (req) => {
    const { email } = req.body;
    const configuracion = await getConfiguracionEmail();
    const infoReset = {
        emisor: configuracion.user,
        receptor: email
    };

    const resultEmail = await Correo.sendMail(configuracion, "blu.urizar@gmail.com", "PRUEBA ENVIO CORREO", null, htmlResetPassword);
    let codigo = resultEmail.messageId;
    infoReset.messageId = codigo.replace("<", "").replace(">", "");
    infoReset.usuarioId = 1;
    infoReset.fecha_vencimiento = new Date();
    const data = await ResetPassWord.create(infoReset);
    response.code = 1;
    response.data = data;
    return response;
}

module.exports = {
    prueba
}