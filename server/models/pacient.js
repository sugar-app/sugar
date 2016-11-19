var db = require('../db');

var Pacient = db.Model.extend({
  tableName: 'pacients'
});

module.exports = Pacient;
