module.exports = (sequelize, type) => {
    return sequelize.define(
        "bitacora_peticion",
        {
            bitacora_peticionId: {
                type: type.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            request: {
                type: type.JSON
            },
            response: {
                type: type.JSON
            },
            usuario_crea: {
                type: type.INTEGER
            },
            fecha_crea: {
                type: type.DATE,
                allowNull: false,
                defaultValue: type.NOW
            },
            ip_origen: {
                type: type.INTEGER
            }
        },
        {
            timestamps: false,
            freezeTableName: true,
        }
    );
};
