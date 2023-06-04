import { logger } from '../../libs/winston';
import { User } from '../../models/user';

export const deleteUserService = async (params: Record<string, any>) => {
  const { id } = params;
  const userFound = await User.findOneAndDelete({ id });
  logger.info('Users deleted', { userFound });
  return userFound;
};
