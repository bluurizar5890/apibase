const express = require('express');
const bodyParser = require('body-parser');
const cookieParser=require('cookie-parser');
const passport = require('passport');
const cors = require('cors');
const config = require('../config');
const errors = require('../network/errors');
const secret = 'secret';
require("../store/db");

const Estado = require('./components/estado/network');
const Municipio = require('./components/municipio/network');
const Pais = require('./components/pais/network');
const Departamento = require('./components/departamento/network');
const Genero = require('./components/genero/network');
const EstadoCivil = require('./components/estadocivil/network');
const TipoDocumento = require('./components/tipodocumento/network');
const TipoSangre = require('./components/tiposangre/network');
const TipoTelefono = require('./components/tipotelefono/network');
const Rol = require('./components/rol/network');
const Persona = require('./components/persona/network');
const DatoExtraPersona = require('./components/datoextrapersona/network');
const DireccionPersona = require('./components/direccionpersona/network');
const IdentificacionPersona = require('./components/identificacionpersona/network');
const TelefonoPersona = require('./components/telefonopersona/network');
const UsuarioRol = require('./components/usuariorol/network');
const Usuario = require('./components/usuario/network');
const Acceso = require('./components/acceso/network');
const Menu = require('./components/menu/network');
const MenuAcceso = require('./components/menuacceso/network');
const RolMenuAcceso = require('./components/rolmenuacceso/network');
const Auth = require('./components/auth/network');
const ResetPassword = require('./components/resetpassword/network');
const Bitacora = require('./components/bitacora/network');
const FotoUsuario = require('./components/fotousuario/network');

//Estratgia de json web token
require('../auth/strategies/jwt');

const app = express();
app.use(bodyParser.json());
app.use(cookieParser(secret));
app.use(passport.initialize());
app.use(cors());
app.use('/api/auth', Auth);
app.use('/api/estado', passport.authenticate('jwt', { session: false }), Estado);
app.use('/api/municipio', passport.authenticate('jwt', { session: false }), Municipio);
app.use('/api/pais', passport.authenticate('jwt', { session: false }), Pais);
app.use('/api/departamento', passport.authenticate('jwt', { session: false }), Departamento);
app.use('/api/estadocivil', passport.authenticate('jwt', { session: false }), EstadoCivil);
app.use('/api/tipodocumento', passport.authenticate('jwt', { session: false }), TipoDocumento);
app.use('/api/tiposangre', passport.authenticate('jwt', { session: false }), TipoSangre);
app.use('/api/tipotelefono', passport.authenticate('jwt', { session: false }), TipoTelefono);
app.use('/api/genero', passport.authenticate('jwt', { session: false }), Genero);
app.use('/api/rol', passport.authenticate('jwt', { session: false }), Rol);
app.use('/api/persona', passport.authenticate('jwt', { session: false }), Persona);
app.use('/api/persona/datoextra', passport.authenticate('jwt', { session: false }), DatoExtraPersona);
app.use('/api/persona/direccion', passport.authenticate('jwt', { session: false }), DireccionPersona);
app.use('/api/persona/identificacion', passport.authenticate('jwt', { session: false }), IdentificacionPersona);
app.use('/api/persona/telefono', passport.authenticate('jwt', { session: false }), TelefonoPersona);
app.use('/api/usuario', passport.authenticate('jwt', { session: false }), Usuario);
app.use('/api/usuario/rol', passport.authenticate('jwt', { session: false }), UsuarioRol);
app.use('/api/usuario/foto', passport.authenticate('jwt', { session: false }), FotoUsuario);
app.use('/api/acceso', passport.authenticate('jwt', { session: false }), Acceso);
app.use('/api/menu', passport.authenticate('jwt', { session: false }), Menu);
app.use('/api/menuacceso', passport.authenticate('jwt', { session: false }), MenuAcceso);
app.use('/api/rolmenuacceso', passport.authenticate('jwt', { session: false }), RolMenuAcceso);
app.use('/api/resetpassword', ResetPassword);
app.use('/api/bitacora', passport.authenticate('jwt', { session: false }), Bitacora);

//Es muy importante que sea el ultimo middelware
app.use(errors);

app.listen(config.api.port, () => {
    console.log('Api escuchando en el puerto ', config.api.port);
});
