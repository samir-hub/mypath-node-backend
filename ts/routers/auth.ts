import { Router } from "express";
import type * as Express from "express";

export const router = Router();

const register = (req: Express.Request, res: Express.Response) => {
  let { username, password } = req.body;
  if (username === undefined || password === undefined) {
    return res
      .status(400)
      .json({ message: "Please provide username and password" });
  }
  
};
const login = () => {};

router.post("/register", register);
router.post("/login", login);
