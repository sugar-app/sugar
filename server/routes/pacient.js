var express = require('express');

var Pacient = require('../models/pacient');
var PacientInsulinType = require('../models/pacient_insulin_type');
var Metric = require('../models/metric');
var TamponRate = require('../models/tampon_rate');
var CorrectionRate = require('../models/correction_rate');

var router = express.Router();

router.get('/', function (req, res) {
  Pacient.collection().fetch({withRelated: ['insulinTypes', 'insulinTypes.insulinType', 'metrics', 'tamponRates', 'correctionRates']}).then((pacients) => {
    var data = pacients.models.map((pacient) => {
      var response = pacient.attributes;
      response.medicalInfo = pacient.getMedicalInfo();
      return response;
    });
    res.json(data);
  });
});

router.get('/:id', function (req, res) {
  Pacient.where('id', req.params.id).fetch({withRelated: ['insulinTypes', 'insulinTypes.insulinType', 'metrics', 'tamponRates', 'correctionRates']}).then((pacient) => {
    var response = pacient.attributes;
    response.medicalInfo = pacient.getMedicalInfo();
    res.json(response);
  }, () => {
    response.status(404);
    res.json({errors: ["Pacient not found"]});
  });
})

router.post('/', function (req, res) {
  var newPacient = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    birthday: req.body.birthday || req.body.birthDay,
    gender: req.body.gender,
    diagnosticDate: req.body.diagnosticDate,
    diabetesType: req.body.diabetesType
  };
  var pacient = new Pacient(newPacient);
  pacient.save().then(function (model) {
    var promises = [];
    if (req.body.medicalInfo && req.body.medicalInfo.recommendedDailyCarbohydrates) {
      var recommendedDailyCarbohydrates = new Metric({
        pacient_id: model.id,
        type: 'recommendedDailyCarbohydrates',
        value: req.body.medicalInfo.recommendedDailyCarbohydrates
      });

      promises.push(recommendedDailyCarbohydrates.save());
    }

    if (req.body.medicalInfo && req.body.medicalInfo.weight) {
      var weight = new Metric({
        pacient_id: model.id,
        type: 'weight',
        value: req.body.medicalInfo.weight
      });

      promises.push(weight.save());
    }

    if (req.body.medicalInfo && req.body.medicalInfo.height) {
      var height = new Metric({
        pacient_id: model.id,
        type: 'height',
        value: req.body.medicalInfo.height
      });

      promises.push(height.save());
    }

    if (req.body.medicalInfo && req.body.medicalInfo.hemoglobinA1C) {
      var hemoglobinA1C = new Metric({
        pacient_id: model.id,
        type: 'hemoglobinA1C',
        value: req.body.medicalInfo.hemoglobinA1C
      });

      promises.push(hemoglobinA1C.save());
    }

    if (req.body.medicalInfo && req.body.medicalInfo.tamponRates) {
      Object.keys(req.body.medicalInfo.tamponRates).forEach((key) => {
        var data = new TamponRate({
          pacient_id: model.id,
          dailyMeal: key,
          value: req.body.medicalInfo.tamponRates[key]
        });

        promises.push(data.save());
      });
    }

    if (req.body.medicalInfo && req.body.medicalInfo.correctionRates) {
      Object.keys(req.body.medicalInfo.correctionRates).forEach((key) => {
        var data = new CorrectionRate({
          pacient_id: model.id,
          dailyMeal: key,
          value: req.body.medicalInfo.correctionRates[key]
        });

        promises.push(data.save());
      });
    }

    Promise.all(promises).then(function () {
      res.status(201);
      res.json(model.attributes);
    }, function (errors) {
      console.log('result', errors);
      res.status(400);
      res.end();
    });
  }, function (error) {
    console.log(error);
    res.status(400);
    res.end();
  });
});

router.post('/:id/metric', function (req, res) {
  Pacient.where('id', req.params.id).fetch().then((pacient) => {
    var metric = new Metric({
      type: req.body.type,
      pacient_id: pacient.id,
      value: req.body.value
    });

    metric.save().then((model) => {
      res.status(201);
      res.json(model.attributes);
    }, () => {
      res.status(400);
      res.end();
    });
  }, () => {
    res.status(404);
    res.json({errors: ["Pacient not found"]});
  })
});

module.exports = router;
