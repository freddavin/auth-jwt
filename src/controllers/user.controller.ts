import { Request, Response } from 'express';
import {
  listUsersService,
  listUserService,
  createUserService,
  deleteUserService,
  updateUserService,
} from '../services/users';
import { logger } from '../libs/winston';
import { HttpStatusCode } from '../libs/custom.errors';

export const createUserHandler = async (req: Request, res: Response) => {
  logger.info('Handling Create User');
  const { body } = req;
  const result = await createUserService(body);
  return res.status(HttpStatusCode.Created).json(result);
};

export const readUsersHandler = async (_req: Request, res: Response) => {
  const result = await listUsersService();
  return res.status(HttpStatusCode.Ok).json(result);
};

export const readUserHandler = async (req: Request, res: Response) => {
  const { params } = req;
  const result = await listUserService(params);
  res.status(HttpStatusCode.Ok).json(result);
};

export const deleteUserHandler = async (req: Request, res: Response) => {
  const { params } = req;
  await deleteUserService(params);
  res.status(HttpStatusCode.NoContent).json();
};

export const updateUserHandler = async (req: Request, res: Response) => {
  const { params, body } = req;
  const result = await updateUserService(params, body);
  res.status(HttpStatusCode.Ok).json(result);
};
