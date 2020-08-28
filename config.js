
module.exports = {
  api: {
    port: process.env.API_PORT || 3000,
    bitacora_cambios: process.env.BITACORA_CAMBIOS || true
  },
  jwt: {
    secret: process.env.JWT_SECRET || "Yahk9Lev5lBdANo6UPQuIgCVHinXsm8M",
  },
  bd: {
    database: "apibase",
    username: "apibase",
    password: "apibase",
    host: "192.168.0.100",
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

/*

module.exports = {
  api: {
    port: process.env.API_PORT || 3000,
    bitacora_cambios: process.env.BITACORA_CAMBIOS || true
  },
  jwt: {
    secret: process.env.JWT_SECRET || "Yahk9Lev5lBdANo6UPQuIgCVHinXsm8M",
  },
  bd: {
    database: "apibase",
    username: "root",
    password: "Blopez$1991",
    host: "localhost",
    dialect: "mysql",
    port: 3306,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
};
*/