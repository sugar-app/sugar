
exports.up = function(knex, Promise) {
  return knex.schema.createTable('pacients', function (table) {
    table.increments('id').primary();
    table.string('firstName').notNullable();
    table.string('lastName').notNullable();
    table.integer('gender').notNullable();
    table.date('birthday').notNullable();
    table.date('diagnosticDate').notNullable();
    table.integer('diabetesType').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('pacients');
};
