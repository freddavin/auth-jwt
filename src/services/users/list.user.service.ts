import { logger } from '../../libs/winston';
import { User } from '../../models/user';

export const listUserService = async (params: Record<string, any>) => {
  const { id } = params;
  const userFound = await User.findOne({ id });
  logger.info('Users found', { userFound });
  return userFound;
};
