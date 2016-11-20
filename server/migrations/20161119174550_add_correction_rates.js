
exports.up = function(knex, Promise) {
  return knex.schema.createTable('correction_rates', function (table) {
    table.increments('id').primary();
    table.integer('pacient_id').unsigned().notNullable();
    table.foreign('pacient_id').references('pacients.id');
    table.enum('dailyMeal', [1, 2, 3]).notNullable();
    table.integer('value').unsigned().notNullable();
    table.timestamp('createdAt').notNullable().defaultTo(knex.raw('now()'));
  });
};

exports.down = function(knex, Promise) {
  knex.schema.table('correction_rates', function (table) {
    table.dropForeign('correction_rates_patient_id_foreign');
  });

  return knex.schema.dropTable('correction_rates');
};
