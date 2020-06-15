import { Router } from "express";
import type * as Express from "express";
import { UserCreds } from "../data/models";
import * as Bcrypt from 'bcryptjs';
import * as Jwt from 'jsonwebtoken'; 

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
    const [result2] = await UserCreds.insert({
      item: {
        username: username,
        password: hashedPassword,
      },
    });
    const token = genToken(result2);
    return res.status(201).json({ created_user: result2, token: token });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
      message: "Error registering user.",
    });
  }
};
const login = () => {
  
};

function genToken(user) {
  const payload = {
    userid: user.id,
    username: user.username,
    roles: ['USER']    
  };
  const options = { expiresIn: '1h' };
  const token = Jwt.sign(payload, process.env.JWT_SECRET, options);

  return token;
}

router.post("/register", register);
router.post("/login", login);

