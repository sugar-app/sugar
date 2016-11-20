var db = require('../db');
var Pacient = require('./pacient');
var InsulinType = require('./insulin_type');

var PacientInsulinType = db.Model.extend({
  tableName: 'pacient_insulin_type',
  pacient: function () {
    return this.hasOne(Pacient);
  },
  insulinType: function () {
    return this.belongsTo(InsulinType);
  }
});

module.exports = PacientInsulinType;
