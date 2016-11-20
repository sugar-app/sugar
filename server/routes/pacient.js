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
  });
})

router.post('/', function (req, res) {
  var newPacient = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    birthday: req.body.birthday,
    gender: req.body.gender,
    diagnosticDate: req.body.diagnosticDate,
    diabetesType: req.body.diabetesType
  };
  var pacient = new Pacient(newPacient);
  pacient.save().then(function (model) {
    var promises = [];
    if (req.body.medicalInfo && req.body.medicalInfo.basalInsulinType) {
      let basalInsulinType = new PacientInsulinType({
        pacient_id: model.id,
        insulin_type_id: req.body.medicalInfo.basalInsulinType.id
      });

      promises.push(basalInsulinType.save());
    }

    if (req.body.medicalInfo && req.body.medicalInfo.bolusInsulinType) {
      let bolusInsulinType = new PacientInsulinType({
        pacient_id: model.id,
        insulin_type_id: req.body.medicalInfo.bolusInsulinType.id
      });

      promises.push(bolusInsulinType.save());
    }

    if (req.body.medicalInfo && req.body.medicalInfo.recommendedDailyCarbohydrates) {
      let recommendedDailyCarbohydrates = new Metric({
        pacient_id: model.id,
        type: 'recommendedDailyCarbohydrates',
        value: req.body.medicalInfo.recommendedDailyCarbohydrates
      });

      promises.push(recommendedDailyCarbohydrates.save());
    }

    if (req.body.medicalInfo && req.body.medicalInfo.weight) {
      let weight = new Metric({
        pacient_id: model.id,
        type: 'weight',
        value: req.body.medicalInfo.weight
      });

      promises.push(weight.save());
    }

    if (req.body.medicalInfo && req.body.medicalInfo.height) {
      let height = new Metric({
        pacient_id: model.id,
        type: 'height',
        value: req.body.medicalInfo.height
      });

      promises.push(height.save());
    }

    if (req.body.medicalInfo && req.body.medicalInfo.hemoglobinA1C) {
      let height = new Metric({
        pacient_id: model.id,
        type: 'hemoglobinA1C',
        value: req.body.medicalInfo.hemoglobinA1C
      });

      promises.push(hemoglobinA1C.save());
    }

    if (req.body.medicalInfo && req.body.medicalInfo.tamponRates) {
      Object.keys(req.body.medicalInfo.tamponRates).forEach((key) => {
        let data = new TamponRate({
          pacient_id: model.id,
          dailyMeal: key,
          value: req.body.medicalInfo.tamponRates[key]
        });

        promises.push(data.save());
      });
    }

    if (req.body.medicalInfo && req.body.medicalInfo.correctionRates) {
      Object.keys(req.body.medicalInfo.correctionRates).forEach((key) => {
        let data = new CorrectionRate({
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

module.exports = router;
