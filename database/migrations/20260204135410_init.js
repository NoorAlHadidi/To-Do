/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
    return knex.schema.createTable('todo_knex', (table) => {
        table.increments('id').primary();
        table.string('title').notNullable();
        table.boolean('done').notNullable().defaultTo(false);
        table.timestamps(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
    return knex.schema.dropTable('todo_knex');
};
