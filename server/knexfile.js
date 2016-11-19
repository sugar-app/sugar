var parse = require('pg-connection-string').parse;
var connection = parse(process.env.DATABASE_URL);
connection['ssl'] = true;

module.exports = {

  development: {
    client: 'postgresql',
    connection: connection,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },


  production: {
    client: 'postgresql',
    connection: connection,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
