import * as Knex from "knex";

const makeUserDetailsTable = async (knex: Knex) => {
  return knex.schema.createTable("user_details", (tbl) => {
    tbl.increments();

    tbl.string("major", 255);

    tbl.string("city", 255);

    tbl
    .integer("user_id")
    .unsigned()
    .notNullable()
    .references("id")
    .inTable("user_creds")
    .onUpdate("CASCADE")
    .onDelete("CASCADE");
  });
};

export const up = async (knex: Knex): Promise<any> => {
  await makeUserDetailsTable(knex);
};

export const down = async (knex: Knex): Promise<any> => {
  knex.schema.dropTableIfExists("user_details");
};
