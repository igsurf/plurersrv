'use restrict'
let mongoose = require('mongoose');
let UsuarioRepository = require('./../../src/main/repository/categoriaRepository');
let repositoryUsuario = new UsuarioRepository();

describe('DB: UsuarioModel', function(){
    this.timeout(10000);
    /**
     * Executa Antes de iniciar a execução dos testes.
     */
    before(async () => {
        await initDB();
    });



    it('Primeiro teste', async (done) => {
        await repositoryUsuario.findAll();
    });


    /**
     * Executa apos todos os testes serem executados.
     */
    after(() => {
        closeDB();
    });

});


function initDB() {
    const dbURI = 'ds131698.mlab.com:31698/leo-plurer-admin', user = 'leo-plurer-admin', password = '18062012leo';
    mongoose.connect('mongodb://' + user + ':' + password + '@' + dbURI);
}

function closeDB(){
    mongoose.connection.close();
}
