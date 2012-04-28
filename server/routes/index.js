var fs = require('fs');

var models = require('../models');

exports.registerOn = function(app) {
  app.get('/', exports.index);

  app.get('/upload', exports.get_upload);
  app.post('/upload', exports.post_upload);
};

exports.index = function(req, res){
  res.render('index', { title: 'Express' })
};

exports.post_upload = function(req, res, next) {
  if (!req.files.image) return res.send(400);
  fs.readFile(req.files.image.path, function(err, data) {
    if (err) return next(err);

    var image = new models.Image({
      data: new Buffer(data),
      labels: [],
    });

    image.save(function(err) {
      if (err) return next(err);
      return res.redirect('/');
    });
  });
};

exports.get_upload = function(req, res, next) {
  res.render('upload');
};
