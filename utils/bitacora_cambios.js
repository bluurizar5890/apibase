const { BitacoraCambios } = require('../store/db');
const config = require('../config');
const moment=require('moment');
const registrarBitacora = async (tabla, modificadoId, dataAnterior, dataNueva) => {
    if (config.api.bitacora_cambios) {
        try {

//            delete dataNueva.fecha_ult_mod;
            let keys = Object.keys(dataNueva);
            let {usuario_ult_mod}=dataNueva;

            keys.map(async (campo) => {
                let valor_anterior = dataAnterior[campo];
                let valor_nuevo = dataNueva[campo];

                if (valor_anterior != valor_nuevo && (valor_anterior && valor_nuevo)) {
                    let tipo_dato = typeof (valor_anterior);
                    console.log({tipo_dato});
                    if(tipo_dato==='object'){
                        valor_anterior=moment(valor_anterior).format('YYYY/MM/DD HH:mm');
                        valor_nuevo=moment(valor_nuevo).format('YYYY/MM/DD HH:mm');
                    }
                    let data = {
                        tabla,
                        campo,
                        modificadoId,
                        tipo_dato,
                        valor_anterior,
                        valor_nuevo,
                        usuario_crea: usuario_ult_mod
                    }
                    resultado = await BitacoraCambios.create(data);
                }
            });

        } catch (error) {
            console.log("Ocurrio un error al registrar la bitacora", error);
        }
    }
}

module.exports = {
    registrarBitacora
}