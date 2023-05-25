import { Request, Response } from 'express';
import { userService } from '../services';

export const userController = (req: Request, res: Response) => {
  const result = userService(req);
  res.status(200).send(result);
};
