'use restrict'
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let RealizacaoModel;
try {
    RealizacaoModel = mongoose.model('REALIZACAO', new Schema({
        tipo: {type: String},
        quantidade: {type: Number},
        urlImagem: {type: String},
        descricao: {type: String}
    }));
} catch (error) {
    RealizacaoModel = mongoose.model('REALIZACAO');
}
module.exports = RealizacaoModel;