'use restrict'
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let PaisModel;
try {
    PaisModel = mongoose.model('PAIS', new Schema({
        nome: {type: String, required: true}
    }));
} catch (error) {
    PaisModel = mongoose.model('PAIS');
}
module.exports = PaisModel;