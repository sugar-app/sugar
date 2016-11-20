var db = require('../db');
var Pacient = require('./pacient');

var Metric = db.Model.extend({
  tableName: 'metrics',
  pacient: function () {
    return this.hasOne(Pacient);
  }
});

module.exports = Metric;
