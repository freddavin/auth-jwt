import { Request, Response } from 'express';
import {
  listUsersService,
  listUserService,
  createUserService,
  deleteUserService,
  updateUserService,
} from '../services/users';
import { logger } from '../libs/winston';
import { HttpStatus } from '../errors/types/enums';

export const createUserHandler = async (req: Request, res: Response) => {
  logger.info('Handling Create User');
  const { body } = req;
  const result = await createUserService(body);
  return res.status(HttpStatus.Created).json(result);
};

export const readUsersHandler = async (req: Request, res: Response) => {
  const result = await listUsersService();
  return res.status(HttpStatus.Ok).json(result);
};

export const readUserHandler = async (req: Request, res: Response) => {
  const { params } = req;
  const result = await listUserService(params);
  res.status(HttpStatus.Ok).json(result);
};

export const deleteUserHandler = async (req: Request, res: Response) => {
  const { params } = req;
  await deleteUserService(params);
  res.status(HttpStatus.NoContent).json();
};

export const updateUserHandler = async (req: Request, res: Response) => {
  const { params, body } = req;
  const result = await updateUserService(params, body);
  res.status(HttpStatus.Ok).json(result);
};
