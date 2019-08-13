const express = require('express');

const router = express.Router();

const funcionarioController = require('../controllers/funcionario.controller');

router.post('/funcionario', funcionarioController.create);
router.get('/funcionarios', funcionarioController.findAll);
router.get('/funcionario/:id', funcionarioController.findById);

module.exports = router;
