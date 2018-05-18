'use restrict'
let Logger = require('./../util/logger');

class ActionRespose{

    constructor(){
        this.statusCode;
        this.mensagemSistema;
        this.mensagemUsuario;
        this.response;
    };    

    sucesso(statusCode, mensagemUsuario, response){
        this.statusCode = statusCode;
        this.mensagemUsuario = mensagemUsuario;
        this.response = response;
        return this;
    };

    fail(statusCode, error, fileName){
        Logger.errorlog.error(fileName + ' - ' + error.toString());
        this.statusCode = statusCode;
        this.mensagemSistema = error.toString();
        return this;
    }
}

module.exports = ActionRespose;