'use restrict'
let UsuarioRepository = require('./../repository/usuarioRepository');
let ActionResponse = require('./../util/actionResponse');
let Logger = require('./../util/logger');

module.exports = function (app) {
    let usuarioRepository = new UsuarioRepository();
    
    app.get('/usuario/identificacao/findall', async function (req, res) {
        try {
            let usuarios = await usuarioRepository.findAll();
            let response = new ActionResponse().sucesso(200, "Consulta efetuada com sucesso. ", usuarios);
            res.json(response);
        } catch (error) {
            Logger.errorlog.error(error);
            res.end();
        }
    });

    app.get('/usuario/findbyid/:id', async function (req, res) {
        try {
            let id = req.params.id;
            let usuario = await usuarioRepository.findById(id);
            let response = new ActionResponse().sucesso(200, "Usuario localizado. ", usuario);
            res.json(response);
        } catch (error) {
            Logger.errorlog.error(error);
            res.end();
        }
    });

    app.put('/usuario/update', async function (req, res) {
        try {
            let usuario = req.body;
            usuario = await usuarioRepository.update(usuario);
            let response = new ActionResponse().sucesso(204, "Usuario atualizado com sucesso. ", usuario);
            res.json(response);
        } catch (error) {
            Logger.errorlog.error(error);
            res.end();
        }
        
    });

    app.post('/usuario/insert', async function (req, res) {
        try {
            let usuario = req.body;
            usuario = await usuarioRepository.insert(usuario);
            let response = new ActionResponse().sucesso(201, "Usuario Cadastrado com sucesso. ", usuario);
            res.json(response);
        } catch (error) {
            Logger.errorlog.error(error);
            res.end();
        }
    });

}