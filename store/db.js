const Sequelize = require('sequelize');
const config = require('../config');
const { QueryTypes } = require('sequelize');


const confiBd = new Sequelize(
  config.bd.database,
  config.bd.username,
  config.bd.password,
  {
    host: config.bd.host,
    dialect: config.bd.dialect,
    port: config.bd.port
  }
);


const EstadoModel = require('./models/cat_estado');
const GeneroModel = require('./models/cat_genero');
const TipoSangreModel = require('./models/cat_tipo_sangre');
const EstadoCivilModel = require('./models/cat_estado_civil');
const TipoDocumentoModel = require('./models/cat_tipo_documento');
const TipoTelefonoModel = require('./models/cat_tipo_telefono');
const PaisModel = require('./models/cat_pais');
const DepartamentoModel = require('./models/cat_departamento');
const MunicipioModel = require('./models/cat_municipio');
const AccesoModel = require('./models/cat_acceso');
const MenuModel = require('./models/cat_menu');
const RolModel = require('./models/cat_rol');
const MenuAccesoModel = require('./models/menu_acceso');
const RolMenuAccesoModel = require('./models/rol_menu_acceso');
const BitacoraCambiosModel = require('./models/bitacora_cambios');
const BitacoraPeticionModel = require('./models/bitacora_peticion');
const PersonaModel = require('./models/persona');
const IdentificacionPersonaModel = require('./models/identificacion_persona');
const DireccionPersonaModel = require('./models/direccion_persona');
const DatoExtraPersonaModel = require('./models/dato_extra_persona');
const UsuarioModel = require('./models/usuario');
const UsuarioRolModel = require('./models/usuario_rol');
const FotoUsuarioModel = require('./models/foto_usuario');
const TelefonoPersonaModel = require('./models/telefono_persona');
const direccion_persona = require('./models/direccion_persona');
const usuario = require('./models/usuario');

const Estado = EstadoModel(confiBd, Sequelize);
const Genero = GeneroModel(confiBd, Sequelize);
const TipoSangre = TipoSangreModel(confiBd, Sequelize);
const EstadoCivil = EstadoCivilModel(confiBd, Sequelize);
const TipoDocumento = TipoDocumentoModel(confiBd, Sequelize);
const TipoTelefono = TipoTelefonoModel(confiBd, Sequelize);
const Pais = PaisModel(confiBd, Sequelize);
const Departamento = DepartamentoModel(confiBd, Sequelize);
const Municipio = MunicipioModel(confiBd, Sequelize);
const Acceso = AccesoModel(confiBd, Sequelize);
const Menu = MenuModel(confiBd, Sequelize);
const Rol = RolModel(confiBd, Sequelize);
const MenuAcceso = MenuAccesoModel(confiBd, Sequelize);
const RolMenuAcceso = RolMenuAccesoModel(confiBd, Sequelize);
const BitacoraCambios = BitacoraCambiosModel(confiBd, Sequelize);
const BitacoraPeticion = BitacoraPeticionModel(confiBd, Sequelize);
const Persona = PersonaModel(confiBd, Sequelize);
const IdentificacionPersona = IdentificacionPersonaModel(confiBd, Sequelize);
const DireccionPersona = DireccionPersonaModel(confiBd, Sequelize);
const DatoExtraPersona = DatoExtraPersonaModel(confiBd, Sequelize);
const Usuario = UsuarioModel(confiBd, Sequelize);
const UsuarioRol = UsuarioRolModel(confiBd, Sequelize);
const FotoUsuario = FotoUsuarioModel(confiBd, Sequelize);
const TelefonoPersona = TelefonoPersonaModel(confiBd, Sequelize);


//Asociaciones
// TipoDocumento.hasOne(IdentificacionPersona,{ foreignKey: 'tipo_documentoId' });
// IdentificacionPersona.belongsTo(TipoDocumento,{ foreignKey: 'tipo_documentoId' });
// Estado.hasOne(IdentificacionPersona,{ foreignKey: 'estadoId' });
// IdentificacionPersona.belongsTo(Estado,{ foreignKey: 'estadoId' });


try {
  confiBd.sync({
    force: false,
    logging: false, //Evitamos que nos muestre lo que hace con la bd
  }).then(() => {
    const { Estados, Generos, Personas, Usuarios, Paises, Departamentos, Municipios, Menus, Accesos, MenuAccesos, TiposDocumentos, Roles, MenuAccesosRol, TiposTelefonos, EstadosCiviles, TiposSangre, UsuarioRoles } = require('./data');
    confiBd.query("select count(*) as total from cat_estado", {
      type: QueryTypes.SELECT
    }).then(async (resultado) => {
      if (resultado[0].total === 0) {
        await Estado.bulkCreate(Estados);
        await Genero.bulkCreate(Generos);
        await Persona.bulkCreate(Personas);
        await Usuario.bulkCreate(Usuarios);
        await Pais.bulkCreate(Paises);
        await Departamento.bulkCreate(Departamentos);
        await Municipio.bulkCreate(Municipios);
        await Menu.bulkCreate(Menus);
        await Acceso.bulkCreate(Accesos);
        await MenuAcceso.bulkCreate(MenuAccesos)
        await TipoDocumento.bulkCreate(TiposDocumentos);
        await Rol.bulkCreate(Roles);
        await RolMenuAcceso.bulkCreate(MenuAccesosRol);
        await TipoTelefono.bulkCreate(TiposTelefonos);
        await EstadoCivil.bulkCreate(EstadosCiviles);
        await TipoSangre.bulkCreate(TiposSangre);
        await UsuarioRol.bulkCreate(UsuarioRoles);
      }
      MenuAcceso.belongsTo(RolMenuAcceso,{ foreignKey: 'menu_accesoId',sourceKey: 'menu_accesoId'});
      RolMenuAcceso.hasMany(MenuAcceso,{ foreignKey: 'menu_accesoId',sourceKey: 'menu_accesoId'});
      Menu.belongsTo(MenuAcceso,{ foreignKey: 'menuId',sourceKey: 'menuId'});
      MenuAcceso.hasOne(Menu,{ foreignKey: 'menuId',sourceKey: 'menuId'});
      Acceso.belongsTo(MenuAcceso,{ foreignKey: 'accesoId',sourceKey: 'accesoId'});
      MenuAcceso.hasOne(Acceso,{ foreignKey: 'accesoId',sourceKey: 'accesoId'});
      
      TipoDocumento.belongsTo(IdentificacionPersona,{foreignKey: 'tipo_documentoId',sourceKey:'tipo_documentoId'});
      IdentificacionPersona.hasOne(TipoDocumento,{foreignKey: 'tipo_documentoId',sourceKey:'tipo_documentoId'});
      Estado.belongsTo(IdentificacionPersona,{foreignKey: 'estadoId',sourceKey:'estadoId'});
      IdentificacionPersona.hasOne(Estado,{foreignKey: 'estadoId',sourceKey:'estadoId'});

      IdentificacionPersona.belongsTo(Persona,{foreignKey: 'personaId',sourceKey:'personaId'});
      Persona.hasMany(IdentificacionPersona,{foreignKey: 'personaId',sourceKey:'personaId'});

      DireccionPersona.belongsTo(Persona,{foreignKey: 'personaId',sourceKey:'personaId'});
      Persona.hasMany(DireccionPersona,{foreignKey: 'personaId',sourceKey:'personaId'});

      Estado.belongsTo(DireccionPersona,{foreignKey: 'estadoId',sourceKey:'estadoId'});
      DireccionPersona.hasOne(Estado,{foreignKey: 'estadoId',sourceKey:'estadoId'});

      Municipio.belongsTo(DireccionPersona,{foreignKey: 'municipioId',sourceKey:'municipioId'});
      DireccionPersona.hasOne(Municipio,{foreignKey: 'municipioId',sourceKey:'municipioId'});

      TipoTelefono.belongsTo(TelefonoPersona,{foreignKey: 'tipo_telefonoId',sourceKey:'tipo_telefonoId'});
      TelefonoPersona.hasOne(TipoTelefono,{foreignKey: 'tipo_telefonoId',sourceKey:'tipo_telefonoId'});
      Estado.belongsTo(TelefonoPersona,{foreignKey: 'estadoId',sourceKey:'estadoId'});
      TelefonoPersona.hasOne(Estado,{foreignKey: 'estadoId',sourceKey:'estadoId'});
      
      Departamento.belongsTo(Municipio,{foreignKey: 'departamentoId',sourceKey:'departamentoId'});
      Municipio.hasOne(Departamento,{foreignKey: 'departamentoId',sourceKey:'departamentoId'});

      TelefonoPersona.belongsTo(Persona,{foreignKey: 'personaId',sourceKey:'personaId'});
      Persona.hasMany(TelefonoPersona,{foreignKey: 'personaId',sourceKey:'personaId'});

      Estado.belongsTo(Persona,{foreignKey: 'estadoId',sourceKey:'estadoId'});
      Persona.hasOne(Estado,{foreignKey: 'estadoId',sourceKey:'estadoId'});

      Genero.belongsTo(Persona,{foreignKey: 'generoId',sourceKey:'generoId'});
      Persona.hasOne(Genero,{foreignKey: 'generoId',sourceKey:'generoId'});

      TipoSangre.belongsTo(DatoExtraPersona,{foreignKey: 'tipo_sangreId',sourceKey:'tipo_sangreId'});
      DatoExtraPersona.hasOne(TipoSangre,{foreignKey: 'tipo_sangreId',sourceKey:'tipo_sangreId'});

      EstadoCivil.belongsTo(DatoExtraPersona,{foreignKey: 'estado_civilId',sourceKey:'estado_civilId'});
      DatoExtraPersona.hasOne(EstadoCivil,{foreignKey: 'estado_civilId',sourceKey:'estado_civilId'});

      Estado.belongsTo(DatoExtraPersona,{foreignKey: 'estadoId',sourceKey:'estadoId'});
      DatoExtraPersona.hasOne(Estado,{foreignKey: 'estadoId',sourceKey:'estadoId'});

      DatoExtraPersona.belongsTo(Persona,{foreignKey: 'personaId',sourceKey:'personaId'});
      Persona.hasMany(DatoExtraPersona,{foreignKey: 'personaId',sourceKey:'personaId'});

      Estado.belongsTo(Usuario,{foreignKey: 'estadoId',sourceKey:'estadoId'});
      Usuario.hasOne(Estado,{foreignKey: 'estadoId',sourceKey:'estadoId'});

      Usuario.belongsTo(Persona,{foreignKey: 'personaId',sourceKey:'personaId'});
      Persona.hasMany(Usuario,{foreignKey: 'personaId',sourceKey:'personaId'});

      UsuarioRol.belongsTo(Rol,{foreignKey:'rolId',sourceKey:'rolId'});
      Rol.hasMany(UsuarioRol,{foreignKey:'rolId',sourceKey:'rolId'});

      Estado.belongsTo(UsuarioRol,{foreignKey: 'estadoId',sourceKey:'estadoId'});
      UsuarioRol.hasOne(Estado,{foreignKey: 'estadoId',sourceKey:'estadoId'});

      Estado.belongsTo(Rol,{foreignKey: 'estadoId',sourceKey:'estadoId'});
      Rol.hasOne(Estado,{foreignKey: 'estadoId',sourceKey:'estadoId'});

      Usuario.belongsTo(Rol,{foreignKey: 'usuario_crea',sourceKey:'usuarioId'});
      Rol.hasOne(Usuario,{foreignKey: 'usuarioId',sourceKey:'usuario_crea'});

      UsuarioRol.belongsTo(Usuario,{foreignKey: 'usuarioId',sourceKey:'usuarioId'});
      Usuario.hasMany(UsuarioRol,{foreignKey: 'usuarioId',sourceKey:'usuarioId'});

    });
  });
} catch (e) {
  console.error(e);
}

module.exports = {
  Estado,
  Genero,
  TipoSangre,
  EstadoCivil,
  TipoDocumento,
  TipoTelefono,
  Pais,
  Departamento,
  Municipio,
  Acceso,
  Menu,
  Rol,
  MenuAcceso,
  RolMenuAcceso,
  BitacoraCambios,
  BitacoraPeticion,
  Persona,
  IdentificacionPersona,
  DireccionPersona,
  DatoExtraPersona,
  Usuario,
  UsuarioRol,
  FotoUsuario,
  TelefonoPersona,
  bd: confiBd
}


