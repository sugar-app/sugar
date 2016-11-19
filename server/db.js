var parse = require('pg-connection-string').parse;
var connection = parse(process.env.DATABASE_URL);
connection['ssl'] = true;
var knex = require('knex')({
  client: 'pg',
  connection: connection
});

module.exports = require('bookshelf')(knex);
