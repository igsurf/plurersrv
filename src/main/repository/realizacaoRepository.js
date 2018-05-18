'use restrict'
let RealizacaoModel = require('./../models/realizacaoModel');
let GenericRepository = require('./genericRepository');

class RealizacaoRepository extends GenericRepository {
    constructor() {
        super(RealizacaoModel);
        this.realizacaoModel = RealizacaoModel;        
    }    
}
module.exports = RealizacaoRepository;