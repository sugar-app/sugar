var db = require('../db');
var Metric = require('./metric');
var PacientInsulinType = require('./pacient_insulin_type');
var TamponRate = require('./tampon_rate');
var CorrectionRate = require('./correction_rate');

var Pacient = db.Model.extend({
  tableName: 'pacients',
  metrics: function () {
    return this.hasMany(Metric);
  },
  insulinTypes: function () {
    return this.hasMany(PacientInsulinType);
  },
  tamponRates: function () {
    return this.hasMany(TamponRate);
  },
  correctionRates: function () {
    return this.hasMany(CorrectionRate);
  },
  getMedicalInfo: function () {
    var medicalInfo = {
      tamponRates: {},
      correctionRates: {}
    };
    var latestPacientInsulinType = this.relations.insulinTypes.models.pop();

    if (latestPacientInsulinType) {
      medicalInfo.insulinType = latestPacientInsulinType.relations.insulinType.attributes;
    }

    this.relations.tamponRates.models.forEach((tamponRate) => {
      medicalInfo.tamponRates[tamponRate.attributes.dailyMeal] = tamponRate.attributes.value;
    });

    this.relations.correctionRates.models.forEach((correctionRate) => {
      medicalInfo.correctionRates[correctionRate.attributes.dailyMeal] = correctionRate.attributes.value;
    });

    this.relations.metrics.models.forEach((metric) => {
      medicalInfo[metric.attributes.type] = metric.attributes.value;
    });

    return medicalInfo;
  }
});

module.exports = Pacient;
