import { v4 as randomUUID } from 'uuid';
import { IUser, User } from '../models/user';
import { logger } from '../libs/winston';

export const findUsers = async () => {
  const usersFound = await User.find({});
  logger.info('Users found');
  return usersFound;
};

export const findUser = async (params: Record<string, any>) => {
  const { id } = params;
  const userFound = await User.findOne({ id });
  logger.info('Users found', { userFound });
  return userFound;
};

export const createUser = async (body: Record<string, any>) => {
  const { name, email, password } = body;
  const user: IUser = {
    id: randomUUID(),
    name,
    email,
    password,
  };

  const insertedUser = await User.create(user);

  logger.info('User inserted into mongo', { insertedUser });

  return {
    id: insertedUser.id,
  };
};
