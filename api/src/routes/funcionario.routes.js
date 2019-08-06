const express = require('express');

const router = express.Router();

const funcionarioController = require('../controllers/funcionario.controller');

router.post('/create', funcionarioController.create);
router.get('/findAll', funcionarioController.findAll);

module.exports = router;
