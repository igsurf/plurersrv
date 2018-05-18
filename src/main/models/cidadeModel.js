'use restrict'
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let CidadeoModel;
try {
    CidadeoModel = mongoose.model('CIDADE', new Schema({
        nome: { type: String, required: true }

    }));
} catch (error) {
    CidadeoModel = mongoose.model('CIDADE');
}
module.exports = CidadeoModel;