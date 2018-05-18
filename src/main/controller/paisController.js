'use restrict'
let PaisRepository = require('./../repository/paisRepository');
let ActionResponse = require('./../util/actionResponse');
let Logger = require('./../util/logger');


module.exports = function (app) {
    let paisRepository = new PaisRepository();

    app.get('/pais/findbydesc/:value', async function (req, res) {
        try {
            let texto = req.params.value;
            let paises = await paisRepository.findByTexto(texto);
            let response = new ActionResponse().sucesso(200, 'Consulta efetuada com sucesso. ', paises);
            res.json(response);
        } catch (error) {
            Logger.errorlog.error(error);
            res.end();
        }
    });
}