var db = require('../db');
var Pacient = require('./pacient');

var CorrectionRate = db.Model.extend({
  tableName: 'correction_rates',
  pacient: function () {
    return this.hasOne(Pacient);
  }
});

module.exports = CorrectionRate;
