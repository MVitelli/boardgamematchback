// Utilizar funcionalidades del Ecmascript 6
'use strict'
// Cargamos los módulos de express y body-parser
const express = require('express');
var bodyParser = require('body-parser');
// Llamamos a express para poder crear el servidor
const app = express();
// Importamos las rutas
const game_routes = require('./routes/game'); 

//un metodo que se ejecuta antes que llegue a un controlador
//Configuramos bodyParser para que convierta el body de nuestras peticiones a JSON
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
// Cargamos las rutas
app.use('/api', game_routes);
// exportamos este módulo para poder usar la variable app fuera de este archivo
module.exports = app;