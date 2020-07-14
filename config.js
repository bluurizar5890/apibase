// module.exports = {
//   api: {
//     port: process.env.API_PORT || 3500,
//     bitacora_cambios: process.env.BITACORA_CAMBIOS || true
//   },
//   jwt: {
//     secret: process.env.JWT_SECRET || "Yahk9Lev5lBdANo6UPQuIgCVHinXsm8M",
//   },
//   bd: {
//     database: "apibase",
//     username: "doadmin",
//     password: "k9tu3z285cuemoez",
//     host: "desarrollo-do-user-7602079-0.a.db.ondigitalocean.com",
//     dialect: "mysql",
//     port: 25060,
//     pool: {
//       max: 5,
//       min: 0,
//       acquire: 30000,
//       idle: 10000,
//     },
//   },
// };


module.exports = {
  api: {
    port: process.env.API_PORT || 3500,
    bitacora_cambios: process.env.BITACORA_CAMBIOS || true
  },
  jwt: {
    secret: process.env.JWT_SECRET || "Yahk9Lev5lBdANo6UPQuIgCVHinXsm8M",
  },
  bd: {
    database: "demobase2",
    username: "root",
    password: "Blopez$1991",
    host: "localhost",
    dialect: "mysql",
    port: 3307,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
};
