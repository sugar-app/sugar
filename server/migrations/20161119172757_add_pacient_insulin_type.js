
exports.up = function(knex, Promise) {
  return knex.schema.createTable('pacient_insulin_type', function (table) {
    table.increments('id').primary();
    table.integer('pacient_id').unsigned().notNullable();
    table.foreign('pacient_id').references('pacients.id');
    table.integer('insulin_type_id').unsigned().notNullable();
    table.foreign('insulin_type_id').references('insulin_type.id');
    table.timestamp('createdAt').notNullable().defaultTo(knex.raw('now()'));
  });
};

exports.down = function(knex, Promise) {
  knex.schema.table('pacient_insulin_type', function (table) {
    table.dropForeign('pacient_insulin_type_pacient_id_foreign');
    table.dropForeign('pacient_insulin_type_insulin_type_id_foreign');
  });
  knex.schema.dropTable('pacient_insulin_type');
};
