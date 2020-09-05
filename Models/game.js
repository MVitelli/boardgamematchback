const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gameSchema = new Schema({
    name: String,
    description: String
})

const Game = mongoose.model('Game', gameSchema, 'game');

exports.findById = (id) => {
    return Game.findById(id).then((result) => {
        result = result.toJSON();
        delete result._id;
        return result;
    });
}