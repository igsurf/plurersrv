'use restrict'
let mongoose = require('mongoose');
let Realizacao = require('./realizacaoModel');
let Schema = mongoose.Schema;

let UsuarioModel;
try {
    UsuarioModel = mongoose.model('USUARIO', new Schema({
        nome: {type: String, trim: true, required: true},
        sobrenome: {type: String, trim: true, required: true},
        realizacoesConquistadas: [Realizacao.schema]
    }));
} catch (error) {
    UsuarioModel = mongoose.model('USUARIO');
}
module.exports = UsuarioModel;