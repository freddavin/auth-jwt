import { hash } from 'bcrypt';
import { IUser, User } from '../../models/user';
import { logger } from '../../libs/winston';
import { BadRequestError, ConflictError } from '../../libs/custom.errors';

export const createUserService = async (body: IUser) => {
  const { name, email, password } = body;

  if (!name || !email || !password) {
    throw new BadRequestError('Important data is not filled');
  }

  const userFound = await User.findOne({ email });

  if (userFound) {
    throw new ConflictError('User already exists');
  }

  const hashPassword = await hash(password, 10);

  const user: IUser = {
    name,
    email,
    password: hashPassword,
  };

  const insertedUser = await User.create(user);

  logger.info('User inserted into mongo', { insertedUser });

  return {
    id: insertedUser.id,
  };
};
