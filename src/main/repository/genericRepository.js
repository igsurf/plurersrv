'use restrict'
class GenericRepository {
    constructor(model) {
        this.model = model;
    }

    defaultErrorLog(err, projeto) {
        if (err) return console.error(err);
    }

    /**
     * Funcao responsavel por consultar todos os registros. 
     */
    findAll() {
        return this.model.find()
            .then(
                (response) => {
                    console.log(response);
                    return response;
                }
            ).catch(
                (error) => {
                    console.log(error);
                }
            );
    }

    /**
     * Funcao responsavel por consultar collection e retornar campos informados. 
     * @param {*} stringCamposRetorno 
     */
    findAllReturnCustom(stringCamposRetorno){
        return this.model.find({}, stringCamposRetorno)
                         .then((response) => {
                             return response;
                         })
                         .catch(
                            (error) => {
                                console.log(error);
                            }
                         );
    }

    /**
     * Funcao responsavel por consultar collection por ID.
     * @param {*} id 
     */
    findById(id){
        return this.model.find({'_id': id}).then(
            (response) => {
                return response;
            }
        ).catch(
            (error) => {
                console.log(error);
            }
        );
    }

    /**
     * Funcao responsavel por deletar por id.
     * @param {*} id 
     */
    deleteById(id){
        return this.model.remove({'_id': id}).then(
            (response) => {
                return response;
            }
        ).catch(
            (error) => {
                console.log(error);
            }
        );
    }

    /**
     * Funcao responsacel por inserir objeto. 
     * @param {*} object 
     */
    insert(object){
        return this.model.create(object).then(
            (response) => {
                return response;
            }
        ).catch(
            (error) => {
                console.log(error);
            }   
        );
    }

    /**
     * Funcao responsavel por atualizar o objeto informado. 
     * @param {*} object 
     */
    update(object){
        return this.model.findOneAndUpdate({ '_id': object._id } , object).then(
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
module.exports = GenericRepository;