'use restrict'
let ArtigoRepository = require('./../repository/artigoRepository');
let ActionResponse = require('./../util/actionResponse');
let Logger = require('./../util/logger');


module.exports = function (app) {
    let artigoRepository = new ArtigoRepository();

    app.get('/artigo/findAll', async function (req, res) {
        try {
            let artigos = await artigoRepository.findAll();
            let response = new ActionResponse().sucesso(200, 'Consulta efetuada com sucesso. ', artigos);
            res.json(response);
        } catch (error) {
            Logger.errorlog.error(error);
            res.end();
        }
    });

    app.post('/artigo/findbyid/:id', async function (req, res) {
        try {
            let id = req.params.id;
            let artigo = await artigoRepository.findById(id);
            let response = new ActionResponse().sucesso(200, 'Artigo localicado. ', artigo);
            res.json(response);
        } catch (error) {
            Logger.errorlog.error(error);
            res.end();
        }
    });
}