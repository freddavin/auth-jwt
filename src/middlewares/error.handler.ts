import { NextFunction, Request, Response } from 'express';
import { AppError } from '../errors/app.error';
import { logger } from '../libs/winston';

export const errorHandler = (
  error: Partial<AppError>,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const message = error.statusCode ? error.message : 'InternalError';
  const statusCode = error.statusCode ?? 500;
  logger.error(message);
  return res.status(statusCode).json({ message });
};
