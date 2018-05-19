var mongoose = require('mongoose');
var Wiki = require('../models/wikiModel');

function defaultErrorLog(err, Wiki) { if (err) return console.error(err); }

module.exports = function (app) {

  app.get('/wiki', function (req, res) {
    console.log('get wiki');
    Wiki.find({}, function (err, result) {
      if (err) return handleError(err);
      res.json(result);
    });
  });

  app.get('/wiki/:id', function (req, res) {
    var idWiki = req.params.id;
    NovidadesProjeto.findOne({'idWiki': idWiki}, function (err, novidades) {
        if (err) return handleError(err);
        res.json(novidades);
    });
});

  app.post('/wiki', function (req, res) {
    console.log('post wiki');
    const wiki = Wiki(req.body);
    console.log('req.body', req.body);
    console.log('wiki', Wiki);
    wiki.save(defaultErrorLog);
    res.json(wiki);
  });

  app.put('/wiki', function(req, res) {
    console.log('put wiki');
    var wiki = req.body;
    Wiki.findOneAndUpdate({ "_id": wiki._id }, wiki, defaultErrorLog);
    res.json(wiki);
  });
}



























































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































