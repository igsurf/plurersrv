'use restrict'
let mongoose = require('mongoose');
let CategoriaModel = require('./categoriaModel');
let CardModel = require('./cardModel');
let Schema = mongoose.Schema;

let ProjetoModel;
try {
    ProjetoModel = mongoose.model('PROJETO', new Schema({
        tipoCampanha: {},
        categoria: CategoriaModel.schema,
        conteudoAdulto: {type: Boolean},
        localProjeto: {},
        titulo: {type: String},
        card: CardModel.schema,
        descricao: {type: String}, 
        estagio: {type: String},
        descricaoRiscos: {type:String},
        metaArrecadacao: {type: Number},
        cupom: {type: String},
        dataFinal: {type: Date},
        valorArrecadado: {type: Number},
        meta: {type: Number},
        dataCriacao: {type : Date, default: Date.now },
        dadosUsuario: {},
        cabecalho: [{}],
        dadosMarketing: [{}]

    }));
} catch (error) {
    ProjetoModel = mongoose.model('PROJETO');
}
module.exports = ProjetoModel;

