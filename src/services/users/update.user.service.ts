import { Types } from 'mongoose';
import { BadRequestError, NotFoundError } from '../../errors/app.error';
import { logger } from '../../libs/winston';
import { IUser, User } from '../../models/user';

export const updateUserService = async (
  params: Record<string, any>,
  body: IUser
) => {
  const { id } = params;
  const { password } = body;
  if (!Types.ObjectId.isValid(id)) {
    throw new BadRequestError('User id not valid');
  }
  if (password) {
    throw new BadRequestError('Password can not be updated');
  }
  const userFound = await User.findByIdAndUpdate(id, body, { new: true });
  if (!userFound) {
    throw new NotFoundError('User not found to update');
  }
  logger.info('User updated', { userFound });
  return userFound;
};
