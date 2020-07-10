const passport = require('passport');
const {Strategy,ExtractJwt}=require('passport-jwt');
const { QueryTypes } = require('sequelize');
const { Usuario,bd } = require('../../store/db');
const config=require('../../config');

passport.use(
    new Strategy({
        secretOrKey:config.jwt.secret,
        jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken()
    },
    async function(tokenPayload,cb){
        try {
            const {usuarioId}=tokenPayload.data;
            const user = await Usuario.findOne({ where: { usuarioId} });
            if (!user) {
                return cb(new Error('Usuario no autorizado'), false);
            }
            let permisos=await bd.query(`select b.menuId as id,b.accesoId as action from rol_menu_acceso a 
            inner join menu_acceso b
            on a.menu_accesoId=b.menu_accesoId and a.estadoId=1 and b.estadoId=1
            inner join usuario_rol c
            on a.rolId=c.rolId and c.estadoId=1
            where c.usuarioId=${usuarioId};`, {
                type: QueryTypes.SELECT
              });


            const userInfo=user.dataValues;
            userInfo.actions=permisos;
            delete user.password;
            return cb(null, userInfo);
        } catch (error) {
            cb(error);
        }
    })
);