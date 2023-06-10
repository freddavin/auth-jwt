import { Request, Response } from 'express';
import {
  listUsers,
  listUserById,
  createUser,
  deleteUser,
  updateUser,
} from '../services/users';
import { logger } from '../libs/winston';
import { HttpStatusCode } from '../libs/custom.errors';

export const createUserHandler = async (req: Request, res: Response) => {
  logger.info('Handling Create User');
  const { body } = req;
  const result = await createUser(body);
  return res.status(HttpStatusCode.Created).json(result);
};

export const readUsersHandler = async (_req: Request, res: Response) => {
  const result = await listUsers();
  return res.status(HttpStatusCode.Ok).json(result);
};

export const readUserHandler = async (req: Request, res: Response) => {
  const { params } = req;
  const result = await listUserById(params);
  res.status(HttpStatusCode.Ok).json(result);
};

export const deleteUserHandler = async (req: Request, res: Response) => {
  const { params } = req;
  await deleteUser(params);
  res.status(HttpStatusCode.NoContent).json();
};

export const updateUserHandler = async (req: Request, res: Response) => {
  const { params, body } = req;
  const result = await updateUser(params, body);
  res.status(HttpStatusCode.Ok).json(result);
};
