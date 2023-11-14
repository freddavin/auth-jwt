import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { BadRequestError, UnauthorizedError } from "../libs/custom.errors";

export const checkToken = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  const { authorization } = req.headers;
  const token = authorization?.split(" ")[1];

  if (!token) {
    throw new BadRequestError("Token is required");
  }

  try {
    const secret = process.env.SECRET!;
    jwt.verify(token, secret);
    next();
  } catch (error) {
    throw new UnauthorizedError("Invalid token");
  }
};
