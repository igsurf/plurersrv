'use restrict'
let PaisModel = require('./../models/paisModel');
let GenericRepository = require('./genericRepository');

class PaisRepository extends GenericRepository {
    constructor() {
        super(PaisModel);
        this.paisModel = PaisModel;        
    } 
    
    findByTexto(texto){
        var regexTexto = new RegExp("^"+ texto);        
        return this.paisModel.find({ 'nome': regexTexto}).then(
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
module.exports = PaisRepository;