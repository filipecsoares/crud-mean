const Funcionario = require('../models/funcionario.model');

exports.create = (req, res) => {
  if (!req.body.nomeFuncionario && !req.body.cargo && !req.body.numeroIdentificador) {
    return res.status(400).send({ message: 'Os campos não podem estar vazios.' });
  }
  const funcionario = new Funcionario({
    nomeFuncionario: req.body.nomeFuncionario,
    cargo: req.body.cargo,
    numeroIdentificador: req.body.numeroIdentificador,
  });
  funcionario.save().then((data) => {
    return res.status(200).send(data);
  }).catch((err) => {
    return res.status(500).send({ message: 'Erro ao criar o Funcionário' || err.message });
  });
};

exports.findAll = (req, res) => {
  Funcionario.find().then((funcionarios) => {
    res.status(200).send(funcionarios);
  }).catch((err) => {
    res.status(500).send({ message: 'Erro ao buscar os funcionários.' || err.message });
  });
};
