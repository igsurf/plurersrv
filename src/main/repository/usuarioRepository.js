'use restrict'
let UsuarioModel = require('./../models/usuarioModel');
let GenericRepository = require('./genericRepository');

class UsuarioRepository extends GenericRepository {
    constructor() {
        super(UsuarioModel);
        this.usuarioModel = UsuarioModel;        
    }    
}
module.exports = UsuarioRepository;