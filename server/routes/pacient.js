var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.json([{
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    gender: 1
  }, {
    id: 2,
    firstName: 'John',
    lastName: 'Doe',
    gender: 1
  }, {
    id: 3,
    firstName: 'John',
    lastName: 'Doe',
    gender: 1
  }, {
    id: 4,
    firstName: 'John',
    lastName: 'Doe',
    gender: 1
  }, {
    id: 5,
    firstName: 'John',
    lastName: 'Doe',
    gender: 1
  }, {
    id: 6,
    firstName: 'John',
    lastName: 'Doe',
    gender: 1
  }, {
    id: 7,
    firstName: 'John',
    lastName: 'Doe',
    gender: 1
  }, {
    id: 8,
    firstName: 'John',
    lastName: 'Doe',
    gender: 1
  }, {
    id: 9,
    firstName: 'John',
    lastName: 'Doe',
    gender: 1
  }, {
    id: 10,
    firstName: 'John',
    lastName: 'Doe',
    gender: 1
  }]);
});

module.exports = router;
