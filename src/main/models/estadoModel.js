'use restrict'
let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let CidadeModel = require('./cidadeModel');

let EstadoModel;
try {
    EstadoModel = mongoose.model('ESTADO', new Schema({
        sigla: {type: String, required: true},
        nome: {type: String, required: true},
        cidades: [CidadeModel.schema]
    }));
} catch (error) {
    EstadoModel = mongoose.model('ESTADO');
}
module.exports = EstadoModel;