import * as Express from "express";

export const validateCreds = (
  req: Express.Request,
  res: Express.Response,
  next: Express.NextFunction
) => {
  const { username, password } = req.body;
  if (username === undefined || password === undefined) {
    return res
      .status(400)
      .json({ message: "Please provide username and password" });
  }
  next();
};
