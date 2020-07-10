const Sequelize = require('sequelize');
const config = require('../config');
const { QueryTypes } = require('sequelize');
const bcrypt = require('bcrypt')

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

try {
  confiBd.sync({
    force: false,
    logging: false, //Evitamos que nos muestre lo que hace con la bd
  }).then(() => {
    const { Departamentos, Municipios, Menus, MenuAccesos, MenuAccesosRol } = require('./data');

    confiBd.query("select count(*) as total from cat_estado", {
      type: QueryTypes.SELECT
    }).then(resultado => {
      let existenEstado = false;
      if (resultado[0].total === 0) {
        Estado.create({
          estadoId: 1,
          descripcion: "Activo"
        });

        Estado.create({
          estadoId: 2,
          descripcion: "Inactivo"
        });

        Estado.create({
          estadoId: 3,
          descripcion: "Eliminado"
        });
        existenEstado = true;
        console.log("Se registraron los estados");
      } else {
        existenEstado = true;
      }
      if (existenEstado) {
        confiBd.query("select count(*) as total from cat_genero", {
          type: QueryTypes.SELECT
        }).then(resultado => {
          if (resultado[0].total === 0) {
            Genero.create({
              generoId: 1,
              descripcion: "Masculino"
            });

            Genero.create({
              generoId: 2,
              descripcion: "Femenino"
            });
            console.log("Se registraron los generos");
          }
        });


        confiBd.query("select count(*) as total from persona", {
          type: QueryTypes.SELECT
        }).then(resultado => {
          if (resultado[0].total === 0) {
            Persona.create({
              personaId: 1,
              nombre1: "Byron",
              apellido1: "López",
              fecha_nacimiento: "1991-07-18",
              generoId: 1
            }).then((data) => {
              Usuario.create({
                usuarioId: 1,
                personaId: 1,
                user_name: "blopez",
                password: bcrypt.hashSync('blopez', 10),
                email: "blu.urizar@gmail.com"
              });
              console.log("Registrando Usuario");
            });
            console.log("Registrando persona");
          }
        });
        confiBd.query("select count(*) as total from cat_pais", {
          type: QueryTypes.SELECT
        }).then(resultado => {
          if (resultado[0].total === 0) {
            Pais.create({
              paisId: 502,
              descripcion: "GUATEMALA",
              nacionalidad: "GUATEMALTECO",
              usuario_crea: 1
            }).then((data) => {
              Departamento.bulkCreate(Departamentos, {
                returning: true
              }).then((data) => {
                Municipio.bulkCreate(Municipios, {
                  returning: true
                }).then((data2) => {
                  // console.log({ data2 });
                })
                  .catch(error => {
                    console.log({ error });
                  });

              })
                .catch(error => {
                  console.log({ error });
                });

            });
          }
        });




        confiBd.query("select count(*) as total from cat_menu", {
          type: QueryTypes.SELECT
        }).then(resultado => {
          if (resultado[0].total === 0) {
            Menu.bulkCreate(Menus, {
              returning: true
            }).then((data) => {
              console.log("Registro de Menus");
            })
              .catch(error => {
                console.log("Error al registrar los menus", error);

              })
          }
        });

        confiBd.query("select count(*) as total from menu_acceso", {
          type: QueryTypes.SELECT
        }).then(resultado => {
          if (resultado[0].total === 0) {
            MenuAcceso.bulkCreate(MenuAccesos, {
              returning: true
            }).then((data) => {
              console.log("Registro de accesos de menu");
            })
              .catch(error => {
                console.log("Error al registrar los accesos de los menus", error);
              })
          }
        });

        
        confiBd.query("select count(*) as total from cat_tipo_documento", {
          type: QueryTypes.SELECT
        }).then(resultado => {
          if (resultado[0].total === 0) {
            TipoDocumento.create({
              tipo_documentoId: 1,
              descripcion: "DPI",
              usuario_crea: 1
            });

            TipoDocumento.create({
              tipo_documentoId: 2,
              descripcion: "NIT",
              usuario_crea: 1
            });
          }
        });


        confiBd.query("select count(*) as total from cat_acceso", {
          type: QueryTypes.SELECT
        }).then(resultado => {
          if (resultado[0].total === 0) {
            Acceso.create({
              accesoId: 1,
              descripcion: "crear",
              usuario_crea: 1
            });
            Acceso.create({
              accesoId: 2,
              descripcion: "Visualizar",
              usuario_crea: 1
            });
            Acceso.create({
              accesoId: 3,
              descripcion: "Actualizar",
              usuario_crea: 1
            });
            Acceso.create({
              accesoId: 4,
              descripcion: "Eliminar",
              usuario_crea: 1
            });
          }
        });


        confiBd.query("select count(*) as total from cat_rol", {
          type: QueryTypes.SELECT
        }).then(resultado => {
          if (resultado[0].total === 0) {
            Rol.create({
              rolId: 1,
              nombre: "Administrador",
              descripcion: "Administrador del sistema",
              usuario_crea: 1
            });

            Rol.create({
              rolId: 2,
              nombre: "Operador",
              descripcion: "Encargado de llevar el control en determinada bodega",
              usuario_crea: 1
            });
          }
        });

        confiBd.query("select count(*) as total from rol_menu_acceso", {
          type: QueryTypes.SELECT
        }).then(resultado => {
          if (resultado[0].total === 0) {
            RolMenuAcceso.bulkCreate(MenuAccesosRol, {
              returning: true
            }).then((data) => {
              console.log("Registro de accesos menu a rol");
            })
              .catch(error => {
                console.log("Error al registro de menus acceso a rol", error);
              })
          }
        });


        confiBd.query("select count(*) as total from usuario_rol", {
          type: QueryTypes.SELECT
        }).then(resultado => {
          if (resultado[0].total === 0) {
            UsuarioRol.create({
              usuarioId: 1,
              rolId: 1,
              usuario_crea: 1
            });
            
          }
        });




        confiBd.query("select count(*) as total from cat_tipo_telefono", {
          type: QueryTypes.SELECT
        }).then(resultado => {
          if (resultado[0].total === 0) {
            TipoTelefono.create({
              tipo_telefonoId: 1,
              descripcion: "Movil",
              usuario_crea: 1
            });

            TipoTelefono.create({
              tipo_telefonoId: 2,
              descripcion: "Fijo",
              usuario_crea: 1
            });
          }
        });


        confiBd.query("select count(*) as total from cat_estado_civil", {
          type: QueryTypes.SELECT
        }).then(resultado => {
          if (resultado[0].total === 0) {
            EstadoCivil.create({
              estado_civilId: 1,
              descripcion: "Soltero/a",
              usuario_crea: 1
            });

            EstadoCivil.create({
              estado_civilId: 2,
              descripcion: "Comprometido/a",
              usuario_crea: 1
            });

            EstadoCivil.create({
              estado_civilId: 3,
              descripcion: "En Relación",
              usuario_crea: 1
            });

            EstadoCivil.create({
              estado_civilId: 4,
              descripcion: "Unión libre o unión de hecho",
              usuario_crea: 1
            });

            EstadoCivil.create({
              estado_civilId: 5,
              descripcion: "Separado/a",
              usuario_crea: 1
            });

            EstadoCivil.create({
              estado_civilId: 6,
              descripcion: "Divorciado/a",
              usuario_crea: 1
            });

            EstadoCivil.create({
              estado_civilId: 7,
              descripcion: "Viudo/a",
              usuario_crea: 1
            });

            EstadoCivil.create({
              estado_civilId: 8,
              descripcion: "Casado/a",
              usuario_crea: 1
            });
          }
        });


        confiBd.query("select count(*) as total from cat_tipo_sangre", {
          type: QueryTypes.SELECT
        }).then(resultado => {
          if (resultado[0].total === 0) {
            TipoSangre.create({
              descripcion: "O Negativo",
              usuario_crea: 1
            });

            TipoSangre.create({
              descripcion: "O Positivo",
              usuario_crea: 1
            });

            TipoSangre.create({
              descripcion: "A Negativo",
              usuario_crea: 1
            });

            TipoSangre.create({
              descripcion: "A Positivo",
              usuario_crea: 1
            });

            TipoSangre.create({
              descripcion: "B Negativo",
              usuario_crea: 1
            });

            TipoSangre.create({
              descripcion: "B Positivo",
              usuario_crea: 1
            });

            TipoSangre.create({
              descripcion: "AB Negativo",
              usuario_crea: 1
            });

            TipoSangre.create({
              descripcion: "AB Positivo",
              usuario_crea: 1
            });

            console.log("Se registraron los tipos de sangre");
          }
        });

      }

    });


    //   confiBd.query("CREATE DATABASE IF NOT EXISTS demoBase;").then(results => {
    //     console.log(results);
    // });

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


