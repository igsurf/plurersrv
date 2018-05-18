'use restrict'
let EstadoModel = require('./../models/estadoModel');
let GenericRepository = require('./genericRepository');

class EstadoRepository extends GenericRepository {
    constructor() {
        super(EstadoModel);
        this.estadoModel = EstadoModel;        
    } 
    
    findByUf(uf){      
        return this.estadoModel.findOne({ 'sigla': uf}).then(
            (response) => {
                return response;
            }
        ).catch(
            (error) => {
                console.log(error);
            }   
        );
    }
}
module.exports = EstadoRepository;