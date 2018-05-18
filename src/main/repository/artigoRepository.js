'use restrict'
let ArtigoModel = require('./../models/artigoModel');
let GenericRepository = require('./genericRepository');

class ArtigoRepository extends GenericRepository{
    constructor(){
        super(ArtigoModel);
        this.artigoModel = ArtigoModel;
    }
}
module.exports = ArtigoRepository;