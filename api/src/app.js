const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
// const path = require('path');

const app = express();

const localdatabase = require('./config/database');

mongoose.Promise = global.Promise;

mongoose.connect(localdatabase.local.localUrl, { useNewUrlParser: true }).then(() => {
  console.log('Database conectado com sucesso!');
}, (err) => {
  console.log(`Erro ao conectar ao database: ${err}`);
  process.exit();
});

// ROUTERS
const index = require('./routes/index');
const funcionarioRoute = require('./routes/funcionario.routes');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(morgan('dev'));
app.use(cors());

app.use('/api', index);
app.use('/api/funcionario', funcionarioRoute);

module.exports = app;
