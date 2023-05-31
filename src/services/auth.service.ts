import { compare } from 'bcrypt';
import { User } from '../models/user';
import config from 'config';
import { sign } from 'jsonwebtoken';

export const authService = async (body: Record<string, any>) => {
  const { email, password } = body;
  const user = await User.findOne({ email });

  if (!user) {
    return { status: 404, message: { error: 'User not found!' } };
  }

  const isValidPassword = await compare(password, user.password);

  if (!isValidPassword) {
    return { status: 401, message: { error: 'Password not valid!' } };
  }

  const secret = config.get<string>('SECRET_HASH');

  const token = sign({ id: user.id }, secret, { expiresIn: '2h' });

  return { status: 200, message: { id: user.id, token } };
};
