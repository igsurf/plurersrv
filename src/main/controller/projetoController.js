'use restrict'
let ProjetoRepository = require('./../repository/projetoRepository');
let ProjetoService = require('./../service/projetoService');
let ProjetoModel = require('./../models/projetoModel');
let ActionResponse = require('./../util/actionResponse');
let Logger = require('./../util/logger');

let projetoModel = require('./../models/projetoModel');

module.exports = function(app) {
  let projetoRepository = new ProjetoRepository();
  let projetoService = new ProjetoService();

  app.get('/projeto/', async function(req, res) {
    projetoModel.find(function(error, projetos) {
        console.log(projetos);
        res.json(projetos);
      })
      // try {
      //     let projetos = await projetoRepository.findAll();
      //     let response = new ActionResponse().sucesso(200, 'Consulta efetuada com sucesso. ', projetos);
      //     res.json(response);
      // } catch (error) {
      //     Logger.errorlog.error(error);
      //     res.end();
      // }
  });


  app.get('/projeto/findbyid/card/:id', async function(req, res) {
    try {
      let id = req.params.id;
      let projeto = await projetoService.findCardByIdProjeto(id);
      let response = new ActionResponse().sucesso(200, 'Consulta efetuada com sucesso. ', projeto);
      res.json(response);
    } catch (error) {
      Logger.errorlog.error(error);
      res.end();
    }
  });


  app.post('/projeto/insert', async function(req, res) {
    try {
      let projeto = req.body;
      console.log(projeto);
      projeto = await projetoRepository.insert(projeto);
      let response = new ActionResponse().sucesso(201, 'Consulta efetuada com sucesso. ', projeto);
      res.json(response);
    } catch (error) {
      Logger.errorlog.error(error);
      res.end();
    }
    res.json(response);
  });

  app.get('/projeto/query', function(req, res) {
    try {
      const query = ProjetoModel.find();
      //FILTRA PROJETOS POR TIPO (ASSINATURA E/OU PROJETO)
      filter('tipoCampanha.descricao', query, req.query.tipo);
      //FILTRA PROJETOS POR CATEGORIAS 0-N
      filter('categoria', query, req.query.categoria);
      //FILTRA PROJETOS POR STATUS ATIVO OU INATIVO
      filter('status', query, req.query.status);
      //FILTRO PROJETOS POR SUA LOCALIDADE (ESTADO)
      filter('localProjeto.sigla', query, req.query.local);
      //FILTRA PROJETO PELO TITULO DO PROJETO
      if (req.query.titulo && req.query.titulo.length > 0) {
        query.where({ titulo: new RegExp(req.query.titulo, 'i') });
      }
      //EXECUTA A QUERY COM TODOS FILTROS VINDOS NO HEADER
      query.exec(function(err, response) {
        if (err) {
          Logger.errorlog.error(err);
          res.end();
        }
        res.json(response);
      });
    } catch (err) {
      Logger.errorlog.error(err);
      res.end();
    }
  });

  function filter(field, query, string) {
    let values = [];
    if (string && string.length > 0) {
      values = string.split('|');
      query.in(field, values);
    }
  }
}