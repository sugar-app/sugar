var db = require('../db');
var PacientInsulinType = require('./pacient_insulin_type');

var InsulinType = db.Model.extend({
  tableName: 'insulin_type',
  pacient_insulin_type: function () {
    this.hasOne(PacientInsulinType);
  }
});

module.exports = InsulinType;
