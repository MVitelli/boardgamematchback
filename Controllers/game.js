const GameModel = require('../models/game');

exports.getById = (req, res) => {
    GameModel.findById(req.params.gameId)
        .then((result) => {
            if (!result) return res.status(404).send({ message: 'El juego no existe' });
            res.status(200).send(result);
        })
        .catch((err) => {
            res.status(500).send({ message: err })
        })
};