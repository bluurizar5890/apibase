const express = require('express');
const response = require('../../../network/response');
const controller = require('./controller');
const router = express.Router();

const login = (req, res, next) => {
    controller.login(req)
        .then((data) => {
            response.success(req, res, data, 200);
        })
        .catch(next);
}


router.post('/',login);

module.exports = router;