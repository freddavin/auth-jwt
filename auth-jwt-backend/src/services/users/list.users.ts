import { logger } from '../../libs/winston';
import { User } from '../../models/user';

export const listUsers = async () => {
  const usersFound = await User.find({});
  logger.info('Users found', { length: usersFound.length });
  return usersFound;
};
