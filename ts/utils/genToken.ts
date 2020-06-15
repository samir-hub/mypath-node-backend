import * as Jwt from "jsonwebtoken";
import { UserCreds as T_UserCreds } from '../types';

export function genToken(user: T_UserCreds) {
    const payload = {
      userid: user.id,
      username: user.username,
      roles: ["USER"],
    };
    const options = { expiresIn: "1h" };
    const token = Jwt.sign(payload, process.env.JWT_SECRET, options);
  
    return token;
  }