'use restrict'
let EstadoRepository = require('./../repository/estadoRepository');
let ActionResponse = require('./../util/actionResponse');
let Logger = require('./../util/logger');


module.exports = function (app) {
    let estadoRepository = new EstadoRepository();

    app.get('/estado/findall', async function (req, res) {
        try {
            let estados = await estadoRepository.findAll();
            let response = new ActionResponse().sucesso(200, 'Consulta efetuada com sucesso. ', estados);
            res.json(response);
        } catch (error) {
            Logger.errorlog.error(error);
            res.end();
        }
    });

    app.get('/estado/findallInfEstado', async function (req, res) {
        try {
            let estados = await estadoRepository.findAllReturnCustom('_id sigla nome');
            let response = new ActionResponse().sucesso(200, 'Consulta efetuada com sucesso. ', estados);
            res.json(response);
        } catch (error) {
            Logger.errorlog.error(error);
            res.end();
        }
    });

    app.get('/estado/findbyuf/cidades/:uf', async function (req, res) {
        try {
            let uf = req.params.uf;
            let estados = await estadoRepository.findByUf(uf);
            let response = new ActionResponse().sucesso(200, 'Consulta de cidades efetuada com sucesso. ', estados);
            res.json(response);
        } catch (error) {
            Logger.errorlog.error(error);
            res.end();
        }
    });
}