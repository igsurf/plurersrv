'use restrict'
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let categoriaModel;

try {
    categoriaModel = mongoose.model('CATEGORIA', new Schema({
        grupo: { type: String, trim: true },
        categorias: [{ type: String, trim: true }]     
    }));
}
catch (error) {
    categoriaModel = mongoose.model('CATEGORIA');
}
module.exports = categoriaModel;