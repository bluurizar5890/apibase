const { Usuario } = require('../../../store/db');
const bcrypt = require('bcrypt');
const auth = require('../../../auth');
let response = {};

const THIRTY_DAYS_IN_SEC = 2592000;
const TWO_HOURS_IN_SEC = 7200;

const login = async (req,res) => {
    const user = await Usuario.findOne({ where: { user_name: req.body.user_name } });
    const { rememberMe } = false;
    if (!user) {
        response.code = -1;
        response.data = "Credenciales inválidas";
        return response;
    }
    return bcrypt.compare(req.body.password, user.password)
        .then((sonIguales) => {
            if (sonIguales === true) {
                const {usuarioId}=user;
                const token= auth.sign({usuarioId});
                response.code = 1;
                response.data =token;
                
                 res.cookie("mitoken",token,{
                    httpOnly:true,
                    maxAge: rememberMe ? THIRTY_DAYS_IN_SEC : TWO_HOURS_IN_SEC
                 });
                 
                return response;
            }
            else {
                response.code = -1;
                response.data = 'Usuario y contraseña incorrectos';
                return response;
            }
        })
        .catch((error) => {
            response.code = -1;
            response.data = "No fue posible realizar la autenticación" +error;
            return response;
        });
}

module.exports = {
    login
}