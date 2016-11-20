var db = require('../db');
var Pacient = require('./pacient');

var TamponRate = db.Model.extend({
  tableName: 'tampon_rates',
  pacient: function () {
    return this.hasOne(Pacient);
  }
});

module.exports = TamponRate;
