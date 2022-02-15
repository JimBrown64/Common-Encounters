/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.createTable("creatures", (table) => {
    table.bigIncrements("id")
    table.string("name").notNullable()
    table.float("CR").notNullable()
    table.bigInteger("HP").notNullable()
    table.bigInteger("AC").notNullable()
    table.bigInteger("speed").notNullable()
    table.bigInteger("str").notNullable()
    table.bigInteger("dex").notNullable()
    table.bigInteger("con").notNullable()
    table.bigInteger("int").notNullable()
    table.bigInteger("wis").notNullable()
    table.bigInteger("cha").notNullable()
    table.bigInteger("strSave").notNullable()
    table.bigInteger("dexSave").notNullable()
    table.bigInteger("conSave").notNullable()
    table.bigInteger("intSave").notNullable()
    table.bigInteger("wisSave").notNullable()
    table.bigInteger("chaSave").notNullable()
    table.text("actions").notNullable()
    table.string("pageFrom")
    table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now())
    table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now())

  })
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
  return knex.schema.dropTableIfExists("creatures")
}
