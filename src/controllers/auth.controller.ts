import { Request, Response } from 'express';
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { User } from '../models/user';
import config from 'config';

export const authController = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email, password });

  if (!user) {
    return res.status(400).send({ error: 'User not found!' });
  }

  const isValidPassword = await compare(user.password, password);

  if (!isValidPassword) {
    return res.status(400).send({ error: 'Password id not valid!' });
  }

  const secret = config.get<string>('SECRET_HASH');

  const token = sign({ id: user.id }, secret, { expiresIn: '2h' });

  return res.send({ id: user.id, token });
};
