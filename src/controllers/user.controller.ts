import { Request, Response } from "express";
import {
  listUsers,
  listUserById,
  deleteUser,
  updateUser,
} from "../services/users";
import { logger } from "../libs/winston";
import { HttpStatusCode } from "../libs/custom.errors";

export const readUsersHandler = async (_req: Request, res: Response) => {
  logger.info("Handling Read Users");

  const users = await listUsers();

  return res.status(HttpStatusCode.Ok).json(users);
};

export const readUserHandler = async (req: Request, res: Response) => {
  logger.info("Handling Read User");

  const { id } = req.params;
  const user = await listUserById(id);

  res.status(HttpStatusCode.Ok).json(user);
};

export const deleteUserHandler = async (req: Request, res: Response) => {
  logger.info("Handling Delete User");

  const { id } = req.params;
  await deleteUser(id);

  res.status(HttpStatusCode.NoContent).json();
};

export const updateUserHandler = async (req: Request, res: Response) => {
  logger.info("Handling Update User");

  const { id } = req.params;
  const { name, email } = req.body;

  const payload = {
    name,
    email,
  };

  const user = await updateUser(id, payload);

  res.status(HttpStatusCode.Ok).json(user);
};
