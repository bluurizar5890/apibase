const { Usuario } = require('../../../store/db');
const bcrypt = require('bcrypt');
const auth = require('../../../auth');
let response = {};

const login = async (req) => {
    const user = await Usuario.findOne({ where: { user_name: req.body.user_name } });

    if (!user) {
        response.code = -1;
        response.data = "Credenciales inválidas";
        return response;
    }
    return bcrypt.compare(req.body.password, user.password)
        .then((sonIguales) => {
            if (sonIguales === true) {
                const {usuarioId}=user;
                response.code = 0;
                response.data = auth.sign({usuarioId});
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
            response.data = "No fue posible realizar la autenticación";
            return response;
        });
}

module.exports = {
    login
}