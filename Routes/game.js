// Cargamos el módulo de express para poder crear rutas
const express = require('express');
const axios = require('axios')
const xml2js = require('xml2js')
const apiURL = 'https://www.boardgamegeek.com/xmlapi2/search?query='
const exact = '&exact=1'
// Cargamos el controlador
const GameController = require('../Controllers/game')
// Llamamos al router
const api = express.Router();
// Creamos una ruta para los métodos que tenemos en nuestros controladores
api.get('/game/:gameId', GameController.getById);
// Exportamos la configuración

api.get('/gameBGG/search', (req, res) => {
    let { name } = req.query
    axios.get(apiURL + name + exact)
        .then((response) => {
            xml2js.parseStringPromise(response.data, { mergeAttrs: true, explicitArray: false })
                .then((result) => {
                    res.send(JSON.stringify(result))
                })
                .catch(err => {
                    console.log(err)
                })
        })
        .catch(err => {
            console.log(err)
        })
})

module.exports = api;