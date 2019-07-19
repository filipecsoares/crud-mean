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
  },
}, {
  timestamps: true,
  collection: 'funcionario',
});

module.exports = mongoose.model('Funcionario', funcionarioSchema);
