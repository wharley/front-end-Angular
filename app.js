'use strict'

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const setor = require('./modulos/setor/setor');
const produto = require('./modulos/produto/produto');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//comentar
app.use(express.static(path.join(__dirname, './myApp/dist/')));

setor.init(app);
produto.init(app);

module.exports = app;