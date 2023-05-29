import { Request, Response } from 'express';
import { findUsers, findUser } from '../services/user.service';

export const getUsersHandler = (req: Request, res: Response) => {
  const result = findUsers(req);
  res.status(200).send(result);
};

export const getUserHandler = (req: Request, res: Response) => {
  const result = findUser(req.params);
  res.status(200).send(result);
};
