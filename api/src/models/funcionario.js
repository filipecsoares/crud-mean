const mongoose = require('mongoose');

const funcionarioSchema = new mongoose.Schema({
  nomeFuncionario: {
    type: String,
    required: true,
  },
  cargo: {
    type: String,
    required: true,
    maxlength: 30,
  },
  numeroIdentificador: {
    type: Number,
    required: true,
    max: 8,
  },
}, {
  collection: 'funcionario',
});

const Funcionario = mongoose.model('Funcionario', funcionarioSchema);

module.exports = Funcionario;
