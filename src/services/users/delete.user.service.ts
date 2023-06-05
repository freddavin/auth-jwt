import { Types } from 'mongoose';
import { BadRequestError, NotFoundError } from '../../errors/app.error';
import { logger } from '../../libs/winston';
import { User } from '../../models/user';

export const deleteUserService = async (params: Record<string, any>) => {
  const { id } = params;
  if (!Types.ObjectId.isValid(id)) {
    throw new BadRequestError('User id not valid');
  }
  const userFound = await User.findByIdAndDelete(id);
  if (!userFound) {
    throw new NotFoundError('User not found to delete');
  }
  logger.info('User deleted', { userFound });
  return userFound;
};
