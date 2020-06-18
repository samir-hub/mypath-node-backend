import * as Knex from "knex";
// import { UserCreds } from "../../types"; 

const data = [
  {
    major: "Engineer",
    city: "Houston",
    user_id: 1
  },
  {
    major: "Chemist",
    city: "Austin",
    user_id: 2
  },
  {
    major: "Biologist",
    city: "Dallas",
    user_id: 3
  },
];

export const seed = async (knex: Knex): Promise<any> =>
  knex("user_details").insert(data);
