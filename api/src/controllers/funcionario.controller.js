const Funcionario = require('../models/funcionario.model');

exports.create = async (req, res) => {
  const novoFuncionario = new Funcionario(req.body);
  const funcionario = await novoFuncionario.save();
  res.status(201).send({ message: 'Funcionário cadastrado com sucesso.', funcionario });
};

exports.findAll = (req, res) => {
  Funcionario.find().then((funcionarios) => {
    res.status(200).send(funcionarios);
  }).catch((err) => {
    res.status(500).send({ message: 'Erro ao buscar os funcionários.' || err.message });
  });
};

exports.findById = (req, res) => {
  Funcionario.findById(req.params.id).then((funcionario) => {
    if (!funcionario) {
      return res.status(404).send({ message: `Funcionário não encontrado ${req.params.id}` });
    }
    res.status(200).send(funcionario);
  }).catch((err) => {
    if (err.kind === 'ObjectId') {
      return res.status(400).send({ message: `Id não encontrado ${req.params.id}` });
    }
    res.status(500).send({ message: 'Erro ao buscar os funcionários.' || err.message });
  });
};

exports.update = (req, res) => {
  if (!req.body.nomeFuncionario && !req.body.cargo && !req.body.numeroIdentificador) {
    return res.status(400).send({ message: 'Os campos não podem estar vazios.' });
  }
  Funcionario.findByIdAndUpdate(req.params.id, {
    nomeFuncionario: req.body.nomeFuncionario,
    cargo: req.body.cargo,
    numeroIdentificador: req.body.numeroIdentificador,
  }, { new: true }).then((funcionario) => {
    if (!funcionario) {
      return res.status(404).send({ message: `Funcionário não encontrado ${req.params.id}` });
    }
    res.status(200).send({ message: 'Funcionário atualizado com sucesso.', funcionario });
  }).catch((err) => {
    if (err.kind === 'ObjectId') {
      return res.status(400).send({ message: `Id não encontrado ${req.params.id}` });
    }
    res.status(500).send({ message: `Erro ao buscar o funcionário ${req.params.id}` });
  });
};

exports.delete = (req, res) => {
  Funcionario.findByIdAndDelete(req.params.id).then((funcionario) => {
    if (!funcionario) {
      return res.status(404).send({ message: `Funcionário não encontrado ${req.params.id}` });
    }
    res.status(200).send({ message: 'Funcionário excluído com sucesso.', funcionario });
  }).catch((err) => {
    if (err.kind === 'ObjectId') {
      return res.status(400).send({ message: `Id não encontrado ${req.params.id}` });
    }
    res.status(500).send({ message: `Erro ao excluir o funcionário ${req.params.id}` });
  });
};
