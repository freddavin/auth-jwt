import { Request, Response } from "express";
import { logger } from "../libs/winston";
import { IUser } from "../models/user";
import { HttpStatusCode } from "../libs/custom.errors";
import { loginUser, registerUser } from "../services";

export const registerHandler = async (req: Request, res: Response) => {
  logger.info("Handling Register User");

  const { name, email, password } = req.body;

  const user: IUser = {
    name,
    email,
    password,
  };
  const createdUser = await registerUser(user);

  return res.status(HttpStatusCode.Created).json(createdUser);
};

export const loginHandler = async (req: Request, res: Response) => {
  logger.info("Handling Login User");

  const { email, password } = req.body;

  const response = await loginUser({ email, password });

  return res.status(HttpStatusCode.Ok).json(response);
};
