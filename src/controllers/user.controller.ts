import { Request, Response } from 'express';
import { findUsers, findUser, createUser } from '../services/user.service';

export const getUsersHandler = async (_: Request, res: Response) => {
  const result = await findUsers();
  res.status(200).send(result);
};

export const getUserHandler = async (req: Request, res: Response) => {
  const result = await findUser(req.params);
  res.status(200).send(result);
};

export const createUserHandler = async (req: Request, res: Response) => {
  try {
    const result = await createUser(req.body);
    res.status(201).send(result);
  } catch (e) {
    res.status(400).send({ error: e });
  }
};
