// Cargamos el módulo de express para poder crear rutas
var express = require('express');
// Cargamos el controlador
var GameController = require('../Controllers/game')
// Llamamos al router
var api = express.Router();
// Creamos una ruta para los métodos que tenemos en nuestros controladores
api.get('/game/:gameId', GameController.getById);
// Exportamos la configuración
module.exports = api;