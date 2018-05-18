'use restrict'
let GenericService = require('./genericService');
let ProjetoRepository = require('./../repository/projetoRepository');

class ProjetoService extends GenericService {
    
    constructor(){
        super();
        this.projetoRepository = new ProjetoRepository();
    }
    
    /**
     * Funcao responsavel por retornar informacoes do card de projeto
     */
    async findCardByIdProjeto(idProjeto){
        await this.projetoRepository.findReturnCustomById('valorArrecadado meta titulo card', idProjeto);
    }

}
module.exports = ProjetoService;