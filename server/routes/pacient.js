var express = require('express');

var Pacient = require('../models/pacient');

var router = express.Router();

router.get('/', function (req, res) {
  Pacient.fetchAll().then((pacients) => {
    var data = pacients.models.map((pacient) => {
      return pacient.attributes;
    });
    res.json(data);
  });
});

router.post('/', function (req, res) {
  var pacient = new Pacient(req.body);
  pacient.save().then(function () {
    res.status(201);
    res.json(pacient.attributes);
  }, function () {
    res.status(403);
    res.end();
  });
});

module.exports = router;
