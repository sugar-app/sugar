
exports.up = function(knex, Promise) {
  return knex.schema.createTable('metrics', function (table) {
    table.increments('id').primary();
    table.integer('pacient_id').unsigned().notNullable();
    table.foreign('pacient_id').references('pacients.id');
    table.enum('type', ['recommendedDailyCarbohydrates', 'weight', 'height', 'hemoglobinA1C']).notNullable();
    table.integer('value').unsigned().notNullable();
    table.timestamp('createdAt').notNullable().defaultTo(knex.raw('now()'));
  });
};

exports.down = function(knex, Promise) {
  knex.schema.table('metrics', function (table) {
    table.dropForeign('metrics_patient_id_foreign');
  });
  knex.schema.dropTable('metrics');
};
