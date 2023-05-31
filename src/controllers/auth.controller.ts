import { Request, Response } from 'express';
import { authService } from '../services/auth.service';

export const authHandler = async (req: Request, res: Response) => {
  const result = await authService(req.body);
  return res.status(result.status).send(result.message);
};
