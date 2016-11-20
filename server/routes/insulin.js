var express = require('express');

var InsulinType = require('../models/insulin_type');

var router = express.Router();

router.get('/', function (req, res) {
  InsulinType.fetchAll().then((collection) => {
    var response = collection.models.map((model) => {
      return model.attributes;
    });

    res.json(response);
  });
});

module.exports = router;
