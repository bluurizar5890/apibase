module.exports = {
    api: {
      port: process.env.API_PORT || 3000,
      bitacora_cambios:process.env.BITACORA_CAMBIOS || true
    },
    jwt: {
      secret: process.env.JWT_SECRET || "Yahk9Lev5lBdANo6UPQuIgCVHinXsm8M",
    },
    bd: {
      database: "demobase",
      username: "root",
      password: "Blopez$1991",
      host: "34.94.42.173",
      dialect: "mysql",
      port:3306,
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
      },
    },
  };
  