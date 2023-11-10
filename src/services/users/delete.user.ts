import { Types } from "mongoose";
import { logger } from "../../libs/winston";
import { User } from "../../models/user";
import { BadRequestError, NotFoundError } from "../../libs/custom.errors";

export const deleteUser = async (id: string) => {
  if (!Types.ObjectId.isValid(id)) {
    throw new BadRequestError("User id not valid");
  }
  const userFound = await User.findByIdAndDelete(id);
  if (!userFound) {
    throw new NotFoundError("User not found to delete");
  }
  logger.info("User deleted", { userFound });
  return userFound;
};
