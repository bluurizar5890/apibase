const express = require('express');
const response = require('../../../network/response');
const controller = require('./controller');
const router = express.Router();

const prueba = (req, res, next) => {
    controller.prueba(req)
        .then((data) => {
            response.success(req, res, data, 200);
        })
        .catch(next);
}


router.post('/',prueba);
module.exports = router;