import * as Knex from "knex";

export const seed = async (knex: Knex): Promise<any> => {
  knex("user_creds").insert([
    {
      username: "user1",
      password: "$2y$12$e25suBDrhzx.Jtw5Fd2bHuSYriQX/8s5pLMMoQ/kd4IVtlPlyiyz2",
    },
  ]);
};
