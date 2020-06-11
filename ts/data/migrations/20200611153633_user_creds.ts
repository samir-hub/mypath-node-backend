import * as Knex from "knex";

const makeUserCredsTable = async (knex: Knex) => {
  return knex.schema.createTable("user_creds", (tbl) => {
    tbl.increments();

    tbl.string("username", 255).notNullable().unique();

    tbl.string("password", 255).notNullable();
  });
};

export const up = async (knex: Knex): Promise<any> => {
  await makeUserCredsTable(knex);
};

export const down = async (knex: Knex): Promise<any> => {
  knex.schema.dropTableIfExists("user_creds");
};
