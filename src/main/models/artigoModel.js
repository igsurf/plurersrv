'use restrict'
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let ArtigoModel;
try {
    ArtigoModel = mongoose.model('ARTIGO', new Schema({
        tipoArtigo: {type: String},
        titulo: {type: String},
        conteudo: {type: String}
    }));
} catch (error) {
    ArtigoModel = mongoose.model('ARTIGO');
}
module.exports = ArtigoModel;