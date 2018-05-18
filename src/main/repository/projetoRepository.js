'use restrict'
let ProjetoModel = require('./../models/projetoModel');
let GenericRepository = require('./genericRepository');

class ProjetoRepository extends GenericRepository {
    constructor() {
        super(ProjetoModel);
        this.projetoModel = ProjetoModel;        
    }    

    /**
     * Funcao responsavel por retornar Informacoes solicitadas de um id de projeto.
     * @param {*} stringCamposRetorno 
     * @param {*} idProjeto 
     */
    findReturnCustomById(stringCamposRetorno, idProjeto){
        return this.projetoModel.find(
                            {'_id': idProjeto}, stringCamposRetorno )
                         .then((response) => {
                             return response;
                         })
                         .catch(
                            (error) => {
                                console.log(error);
                            }
                         );
    }
}
module.exports = ProjetoRepository;