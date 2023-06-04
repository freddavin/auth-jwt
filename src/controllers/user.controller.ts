import { Request, Response } from 'express';
import {
  listUsersService,
  listUserService,
  createUserService,
  deleteUserService,
} from '../services/users';
import { logger } from '../libs/winston';

export const createUserHandler = async (req: Request, res: Response) => {
  logger.info('Handling Create User');
  const { body } = req;
  const result = await createUserService(body);
  return res.status(201).json(result);
};

export const readUsersHandler = async (req: Request, res: Response) => {
  const result = await listUsersService();
  return res.status(200).send(result);
};

export const readUserHandler = async (req: Request, res: Response) => {
  const result = await listUserService(req.params);
  res.status(200).send(result);
};

export const deleteUserHandler = async (req: Request, res: Response) => {
  const result = await deleteUserService(req.params);
  res.status(200).send(result);
};
