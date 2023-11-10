import { Types } from "mongoose";
import { logger } from "../../libs/winston";
import { IUser, User } from "../../models/user";
import { BadRequestError, NotFoundError } from "../../libs/custom.errors";

export const updateUser = async (id: string, input: Partial<IUser>) => {
  const { password } = input;
  if (!Types.ObjectId.isValid(id)) {
    throw new BadRequestError("User id not valid");
  }
  if (password) {
    throw new BadRequestError("Password can not be updated");
  }
  const userFound = await User.findByIdAndUpdate(id, input, { new: true });
  if (!userFound) {
    throw new NotFoundError("User not found to update");
  }
  logger.info("User updated", { userFound });
  return userFound;
};
