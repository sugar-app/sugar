var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');

var pacientRoutes = require('./routes/pacient');

var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.use('/pacients', pacientRoutes);

app.listen(port, function () {
  console.log('Example app listening on port', port)
})
