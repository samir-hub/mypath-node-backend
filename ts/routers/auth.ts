import { Router } from "express";
import type * as Express from "express";
import { UserCreds } from "../data/models";
import * as Bcrypt from "bcryptjs";
import * as Jwt from "jsonwebtoken";
import { genToken } from "../utils/genToken";
import { validateCreds } from "../middleware";

//import { validateCreds } from "../middleware";

export const router = Router();

//router.use(validateCreds);

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
    return res
      .status(201)
      .json({ id: result2.id, username: result2.username, token: token });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
      message: "Error registering user.",
    });
  }
};
const login = async (req: Express.Request, res: Express.Response) => {
  const { username, password } = req.body;

  try {
    const [user] = await UserCreds.get({ username });
    console.log(user);
    if (user && Bcrypt.compareSync(password, user.password)) {
      const token = genToken(user);
      res
        .status(200)
        .json({ id: user.id, username: user.username, token: token });
    } else {
      res.status(401).json({ message: "Invalid Credentials" });
    }
  } catch (error) {
    return res.status(500).json({
      error: error.message,
      message: "Error logging in user.",
    });
  }
};

const getUserInfo = async (req: Express.Request, res: Express.Response) => {
  var authorization = req.headers.authorization,
    decoded;
  try {
    decoded = Jwt.verify(authorization, process.env.JWT_SECRET);
  } catch (e) {
    return res.status(401).send("unauthorized");
  }
  var id = decoded.userid;

  try {
    const user = await UserCreds.getUser(id);
    console.log(user);
    user.forEach((user) => delete user.password);
    return res.status(200).json({
      user: user,
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
      message: "Error getting user.",
    });
  }
};

router.get("/users/getuserinfo", getUserInfo);
router.post("/register", validateCreds, register);
router.post("/login", validateCreds, login);
