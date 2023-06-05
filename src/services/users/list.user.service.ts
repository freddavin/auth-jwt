import { Types } from 'mongoose';
import { BadRequestError, NotFoundError } from '../../errors/app.error';
import { logger } from '../../libs/winston';
import { User } from '../../models/user';

export const listUserService = async (params: Record<string, any>) => {
  const { id } = params;
  if (!Types.ObjectId.isValid(id)) {
    throw new BadRequestError('User id not valid');
  }
  const userFound = await User.findById(id);
  if (!userFound) {
    throw new NotFoundError('User not found');
  }
  logger.info('User found', { userFound });
  return userFound;
};
