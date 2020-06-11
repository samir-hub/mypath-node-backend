import * as Knex from "knex";
import * as cleaner from "knex-cleaner";

export async function seed(knex: Knex): Promise<any> {
  return cleaner.clean(knex, {
    ignoreTables: ["knex_migrations", "knex_migrations_lock"],
  });
}
