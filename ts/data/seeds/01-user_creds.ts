import * as Knex from "knex";

interface MyInterface {
  username: string;
  password: string;
}

const data: MyInterface[] = [
  {
    username: "user1",
    password: "$2y$12$e25suBDrhzx.Jtw5Fd2bHuSYriQX/8s5pLMMoQ/kd4IVtlPlyiyz2",
  },
  {
    username: "user2",
    password: "$2y$12$e25suBDrhzx.Jtw5Fd2bHuSYriQX/8s5pLMMoQ/kd4IVtlPlyiyz2",
  },
  {
    username: "user3",
    password: "$2y$12$e25suBDrhzx.Jtw5Fd2bHuSYriQX/8s5pLMMoQ/kd4IVtlPlyiyz2",
  },
];

export const seed = async (knex: Knex): Promise<any> =>
  knex("user_creds").insert(data);
