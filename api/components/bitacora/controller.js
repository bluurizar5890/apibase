var sequelize = require("sequelize");
const moment = require('moment');
const { BitacoraCambios, BitacoraPeticion, Usuario } = require('../../../store/db');
const { validarpermiso } = require('../../../auth');
let response = {};

cambios = async (req) => {
    const MenuId = 27;
    let autorizado = await validarpermiso(req, MenuId, 3);
    if (autorizado !== true) {
        return autorizado;
    }

    let query = '';
    let { tabla, usuarioId = 0, fechaInicial, fechaFinal } = req.body;
    if (tabla) {
        query = `bitacora_cambios.tabla='${tabla}'`;
    }

    if (usuarioId > 0) {
        if (String(query).trim().length > 0) {
            query += ` and bitacora_cambios.usuario_crea=${usuarioId}`
        } else {
            query += `bitacora_cambios.usuario_crea=${usuarioId}`
        }
    }

    if (fechaFinal && fechaFinal) {
        fechaFinal= moment(fechaFinal, 'YYYY-MM-DD').add(1,"days").format('YYYY-MM-DD');
        if (String(query).trim().length > 0) {
            query += ` and bitacora_cambios.fecha_crea between '${fechaInicial}' and '${fechaFinal}'`;
        } else {
            query += `bitacora_cambios.fecha_crea between '${fechaInicial}' and '${fechaFinal}'`;
        }
    }
    response.code = 1;
    response.data = await BitacoraCambios.findAll({
        include: [{
            model: Usuario,
            as: "Usuario",
            require: true,
            attributes: ['user_name']
        }],
        where: sequelize.literal(query),
        order: [
            ['bitacora_cambiosId', 'ASC']
        ]
    });

    return response;
}

peticiones = async (req) => {
    const MenuId = 25;
    let existenParametros = false;
    let autorizado = await validarpermiso(req, MenuId, 3);
    if (autorizado !== true) {
        return autorizado;
    }

    let query = '';
    let { baseUrl, method, status = 0, error, usuarioId = 0, fechaInicial, fechaFinal, ip_origen } = req.body;
    if (baseUrl) {
        query = `bitacora_peticion.baseUrl='${baseUrl}'`;
        existenParametros = true;
    }

    if (method) {
        if (String(query).trim().length > 0) {
            query += ` and bitacora_peticion.method='${method}'`;
        } else {
            query += `bitacora_peticion.method='${method}'`;
        }
        existenParametros = true;
    }

    if (status > 0) {
        if (String(query).trim().length > 0) {
            query += ` and bitacora_peticion.status=${status}`
        } else {
            query += `bitacora_peticion.status=${status}`
        }
        existenParametros = true;
    }

    if (error !== undefined) {
        if (String(query).trim().length > 0) {
            query += ` and bitacora_peticion.error='${error}'`;
        } else {
            query += `bitacora_peticion.error='${error}'`;
        }
        existenParametros = true;
    }

    if (usuarioId !== undefined) {
        if (String(query).trim().length > 0) {
            query += ` and bitacora_peticion.usuario_crea=${usuarioId}`
        } else {
            query += `bitacora_peticion.usuario_crea=${usuarioId}`
        }
        existenParametros = true;
    }

    if (fechaFinal && fechaFinal) {
        fechaFinal= moment(fechaFinal, 'YYYY-MM-DD').add(1,"days").format('YYYY-MM-DD');
        if (String(query).trim().length > 0) {
            query += ` and bitacora_peticion.fecha_crea between '${fechaInicial}' and '${fechaFinal}'`;
        } else {
            query += `bitacora_peticion.fecha_crea between '${fechaInicial}' and '${fechaFinal}'`;
        }
        existenParametros = true;
    }

    if (ip_origen) {
        if (String(query).trim().length > 0) {
            query += ` and bitacora_peticion.ip_origen='${ip_origen}'`;
        } else {
            query += `bitacora_peticion.ip_origen='${ip_origen}'`;
        }
        existenParametros = true;
    }

    console.log({query});

    if (existenParametros === true) {
        response.code = 1;
        response.data = await BitacoraPeticion.findAll({
            include: [{
                model: Usuario,
                as: "Usuario",
                require: false,
                attributes: ['user_name']
            }],
            where: sequelize.literal(query),
            attributes: { exclude: ["request", "response"] },
            order: [
                ['bitacora_peticionId', 'ASC']
            ]
        });
    } else {
        response.code = -1;
        response.data = "Los parametros enviados no son válidos.";
    }

    return response;
}

peticionesRequest = async (req) => {
    const MenuId = 25;
    let autorizado = await validarpermiso(req, MenuId, 3);
    if (autorizado !== true) {
        return autorizado;
    }
    const { bitacora_peticionId } = req.params;

    if (bitacora_peticionId>0) {
        response.code = 1;
        response.data = await BitacoraPeticion.findOne({
            where:{bitacora_peticionId},
            attributes: ["request"],
        });
    } else {
        response.code = -1;
        response.data = "Los parametros enviados no son válidos.";
    }
    return response;
}
peticionesResponse = async (req) => {
    const MenuId = 25;
    let autorizado = await validarpermiso(req, MenuId, 3);
    if (autorizado !== true) {
        return autorizado;
    }
    const { bitacora_peticionId } = req.params;

    if (bitacora_peticionId>0) {
        response.code = 1;
        response.data = await BitacoraPeticion.findOne({
            where:{bitacora_peticionId},
            attributes: ["response"],
        });
    } else {
        response.code = -1;
        response.data = "Los parametros enviados no son válidos.";
    }
    return response;
}
module.exports = {
    cambios,
    peticiones,
    peticionesRequest,
    peticionesResponse
}