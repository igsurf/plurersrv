var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var wikiSchema;

try {
    wikiSchema = mongoose.model('wiki', new Schema({

        tipo: { type: String, trim: true },
        titulo: { type: String },
        conteudo: { type: String }

    }));
} catch (e) {
    wikiSchema = mongoose.model('wiki');
}

module.exports = wikiSchema;