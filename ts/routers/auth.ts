import { Router } from "express";
import type * as Express from "express";
import { UserCreds } from "../data/models";
import * as Bcrypt from 'bcryptjs'; 

import { validateCreds } from '../middleware'; 

export const router = Router();

router.use(validateCreds); 

const register = async (req: Express.Request, res: Express.Response) => {
  const { username, password } = req.body;
  const hashedPassword = Bcrypt.hashSync(password, 8); 

  try {
    const result1 = await UserCreds.get({ username });
    if (result1.length !== 0) {
      return res.status(400).json({
        message: `Username ${username} already exists.`,
      });
    }
    const result2 = await UserCreds.insert({
      item: {
        username,
        password,
      },
    });
    return res.status(201).json(result2);
  } catch (error) {
    return res.status(500).json({
      error: error.message,
      message: "Error registering user.",
    });
  }
};
const login = () => {
  
};

router.post("/register", register);
router.post("/login", login);
