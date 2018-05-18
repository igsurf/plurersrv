'use restrict'
let CategoriaModel = require('./../models/categoriaModel');
let GenericRepository = require('./genericRepository');

class CategoriaRepository extends GenericRepository {
    constructor() {
        super(CategoriaModel);
        this.categoriaModel = CategoriaModel;        
    }    
}
module.exports = CategoriaRepository;