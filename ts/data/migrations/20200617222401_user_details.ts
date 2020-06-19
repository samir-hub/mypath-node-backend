import * as Knex from "knex";

const makeUserDetailsTable = async (knex: Knex) => {
  return knex.schema.createTable("user_details", (tbl) => {
    tbl.increments();

    tbl
    .integer("user_id")
    .unsigned()
    .notNullable()
    .references("id")
    .inTable("user_creds")
    .onUpdate("CASCADE")
    .onDelete("CASCADE");

    tbl.string("education", 255);

    tbl.string("major", 255);

    tbl.float("avgmajor"); 

    tbl.float("lowmajor");

    tbl.float("highmajor");

    tbl.string("city", 255);

    tbl.float("colindex");

    tbl.float("rent");
    
    tbl.float("avgwage");

    tbl.float("rentindex");

    tbl.float("colplusrentindex");

    tbl.float("groceriesindex");

    tbl.float("restaurantpriceindex");

    tbl.float("utilities");

    tbl.float("groceries");

    tbl.float("restaurant");
    
    tbl.float("premiums");

    tbl.float("medExpenses");

    tbl.float("carPayment");

    tbl.float("insurance");

    tbl.float("gas");

    tbl.float("carMaintenance");

    tbl.float("internet");

    tbl.float("cell");

    tbl.float("tv");

    tbl.float("studentLoans");

    tbl.float("clothing");

    tbl.float("entertainment");

    tbl.float("pOther");
    
  });
};

export const up = async (knex: Knex): Promise<any> => {
  await makeUserDetailsTable(knex);
};

export const down = async (knex: Knex): Promise<any> => {
  knex.schema.dropTableIfExists("user_details");
};
