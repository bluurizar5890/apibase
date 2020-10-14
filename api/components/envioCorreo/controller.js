const { Acceso, Estado } = require('../../../store/db');
const { registrarBitacora } = require('../../../utils/bitacora_cambios');
const moment = require('moment');
const { validarpermiso } = require('../../../auth');
const email = require('../../../utils/EnviarCorreo');
const { htmlResetPassword } = require('../../../utils/plantillasCorreo/ResetPassword');
const MenuId=1;
const Modelo = Acceso;
const tabla = 'cat_acceso';
let response = {};


const prueba = async (req) => {
    
    response.code = 1;
    response.data = "Prueba";
    const a=await email.sendMail("blu.urizar@gmail.com","PRUEBA ENVIO CORREO",null,htmlResetPassword);
    console.log(a);
    return a;
}

module.exports = {
    prueba
}