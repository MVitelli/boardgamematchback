// Utilizar funcionalidades del Ecmascript 6
'use strict'
// Cargamos el módulo de mongoose para poder conectarnos a MongoDB
var mongoose = require('mongoose');
// *Cargamos el fichero app.js con la configuración de Express
const app = require('./app');
// Creamos la variable PORT para indicar el puerto en el que va a funcionar el servidor
const port = 3005;
app.listen(port, () => {
    console.log(`servidor corriendo en http://localhost:${port}`);
});

// // Le indicamos a Mongoose que haremos la conexión con Promesas
// mongoose.Promise = global.Promise;
// // Usamos el método connect para conectarnos a nuestra base de datos
// mongoose.connect('mongodb://localhost/boardgame_db', { useUnifiedTopology: true, useNewUrlParser: true })
//     .then(() => {
//         console.log("La conexión a la base de datos boardgame_db se ha realizado correctamente")

//         // CREAR EL SERVIDOR WEB CON NODEJS
//         app.listen(port, () => {
//             console.log("servidor corriendo en http://localhost:3800");
//         });
//     })
//     // Si no se conecta correctamente escupimos el error
//     .catch(err => console.log(err));