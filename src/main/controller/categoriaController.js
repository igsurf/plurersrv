'use restrict'
let CategoriaRepository = require('./../repository/categoriaRepository');
let ActionResponse = require('./../util/actionResponse');
let Logger = require('./../util/logger');

module.exports = function (app) {

    let categoriaRepository = new CategoriaRepository();

    app.get('/categoria/findall', async function (req, res) {
        try {
            let listaCategorias = await categoriaRepository.findAll();
            let response = new ActionResponse().sucesso(200, "Consulta efetuada com sucesso. ", listaCategorias);
            res.json(response);

        } catch (error) {
            Logger.errorlog.error(error);
            let response = new ActionResponse().fail(500, error, 'CategoriaController');
            res.json(response);
        }
    });

    app.get('/categoria/findbyid/:id', async function (req, res) {
        try {
            var id = req.params.id;
            let categoria = await categoriaRepository.findById(id);
            let response = new ActionResponse().sucesso(200, "Categoria Localizada. ", categoria);
            res.json(response);

        } catch (error) {
            Logger.errorlog.error(error);
            res.end();
        }
    });


    app.delete('/categoria/remove', async function (req, res) {
        try {

            var id = req.body.id;
            await categoriaRepository.deleteById(id);
            let response = new ActionResponse().sucesso(204, "Categoria deletada com sucesso. ", {});
            res.json(response);

        } catch (error) {
            Logger.errorlog.error(error);
            res.end();
        }
    });

    app.post('/categoria/insert', async function (req, res) {
        try {

            let categoria = req.body;
            let categoriaCriada = await categoriaRepository.insert(categoria);
            let response = new ActionResponse().sucesso(201, "Categoria criada com sucesso. ", categoriaCriada);
            res.json(response);

        } catch (error) {
            Logger.errorlog.error(error);
            res.end();
        }
    });

    app.put('/categoria/update', async function (req, res) {
        try {
            let categoria = req.body;
            let categoriaAtualizada = await categoriaRepository.update(categoria);
            let response = new ActionResponse().sucesso(204, "Categoria atualizada com sucesso. ", categoriaAtualizada);
            res.json(response);

        } catch (error) {
            Logger.errorlog.error(error);
            res.end();
        }
    });

}