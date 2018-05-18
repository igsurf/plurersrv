'use restrict'
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let cardModel;

try {
    cardModel = mongoose.model('CARD', new Schema({
        descricao: { type: String, trim: true},
        foto: {type: String} 
    }));
}
catch (error) {
    cardModel = mongoose.model('CARD');
}
module.exports = cardModel;