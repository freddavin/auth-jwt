import { compare } from "bcrypt";
import jwt from "jsonwebtoken";
import { IUser, User } from "../../models/user";
import { logger } from "../../libs/winston";
import {
  BadRequestError,
  NotFoundError,
  UnauthorizedError,
} from "../../libs/custom.errors";

export const loginUser = async (input: Partial<IUser>) => {
  const { email, password } = input;

  if (!email || !password) {
    throw new BadRequestError("Important data is not filled");
  }

  const userFound = await User.findOne({ email });

  if (!userFound) {
    throw new NotFoundError("User not found");
  }

  const checkPassword = await compare(password, userFound.password);

  if (!checkPassword) {
    throw new UnauthorizedError("Wrong password");
  }

  const secret = process.env.SECRET || "";
  const token = jwt.sign({ id: userFound.id, name: userFound.name }, secret);

  logger.info("User logged", { userFound });

  return token;
};
