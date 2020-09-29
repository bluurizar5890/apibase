const { Usuario,bd } = require('../../../store/db');
const bcrypt = require('bcrypt');
const { QueryTypes } = require('sequelize');
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
        .then(async(sonIguales) => {
            if (sonIguales === true) {
                const {usuarioId}=user;
                const data={};
                const token= auth.sign({usuarioId});
               
                const accesos=await bd.query(`select distinct b.menuId,b.accesoId from rol_menu_acceso a 
                inner join menu_acceso b
                on a.menu_accesoId=b.menu_accesoId and a.estadoId=1 and b.estadoId=1
                inner join usuario_rol c
                on a.rolId=c.rolId and c.estadoId=1
                inner join cat_acceso d
                on b.accesoId=d.accesoId and d.estadoId=1
                where c.usuarioId=${usuarioId};`, {
                type: QueryTypes.SELECT
                });

                
                data.token=token;
                data.accesos=accesos;
                response.code = 1;
                response.data =data;
                
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