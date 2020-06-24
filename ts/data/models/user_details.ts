import db from "../dbConfig";
import { UserDetails } from "../../types";
import { basicModelTemplate } from "./basicModelTemplate";

const tableName = "user_details";

const { get, insert, getDetails } = basicModelTemplate<UserDetails>({
  db,
  tableName,
});

export default {
  get,
  getDetails,
  insert,
};
