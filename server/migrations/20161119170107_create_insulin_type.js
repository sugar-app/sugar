
exports.up = function(knex, Promise) {
  return knex.schema.createTable('insulin_type', function (table) {
    table.increments('id').primary();
    table.string('genericName').notNullable();
    table.string('brandName').notNullable();
    table.string('maunfacturer').notNullable();
    table.enum('form', [1, 2]).notNullable();
    table.string('delivery').notNullable();
    table.integer('onset').unsigned().notNullable();
    table.integer('peak').unsigned().notNullable();
    table.integer('duration').unsigned().notNullable();
    table.enum('action', [1, 2]).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('insulin_type');
};
