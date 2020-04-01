const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const { errors } = require('celebrate');
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());
/**
 * Metodos HTTP
 * get: buscar algo
 * post: criar algo ou gravar
 * put: alterar algo
 * delete: para eliminar
 */
/**
 * tipos de paramentros
 * Query: parametros nomeados enviados na rota apos o simbolo de interrogação,
 * Route Params: parametros usados para indentificar recursos
 * Request body: corpo da requisicao, usado para criar ou alterar recurso 
 */

 /**
  * BD
  * Driver: usamos querys;
  * Query builder: table('users'), ou seja querys com estrutura JS
  */


module.exports = app;
//app.listen(3333);