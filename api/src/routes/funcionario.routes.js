const express = require('express');

const router = express.Router();

const funcionarioController = require('../controllers/funcionario.controller');

router.post('/create', funcionarioController.create);

module.exports = router;
