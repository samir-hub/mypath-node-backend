import db from "../dbConfig";
import { UserCreds } from "../../types";
import { basicModelTemplate } from "./basicModelTemplate";

const tableName = "user_creds";

const { get, insert, getUser } = basicModelTemplate<UserCreds>({
  db,
  tableName,
});

export default {
  get,
  insert,
  getUser
};
