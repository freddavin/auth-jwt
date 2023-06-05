import { NextFunction, Request, Response } from 'express';
import { AppError } from '../errors/app.error';
import { logger } from '../libs/winston';
import { HttpStatus } from '../errors/types/enums';

export const errorHandler = (
  error: Partial<AppError>,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const message = error.statusCode ? error.message : 'InternalServerError';
  const statusCode = error.statusCode ?? HttpStatus.InternalServerError;
  logger.error(`${message}: ${error.message}`);
  return res.status(statusCode).json({ message });
};
