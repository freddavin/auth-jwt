import { NextFunction, Request, Response } from 'express';
import { logger } from '../winston';
import { HttpError } from './app.error';
import { GeneralErrorCode, HttpStatusCode } from './types/enums';

export const errorHandler = (
  error: Partial<HttpError>,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  const message = error instanceof Error ? error.message : String(error);
  const statusCode = error.statusCode ?? HttpStatusCode.InternalServerError;
  const errorCode = error.statusCode ?? GeneralErrorCode.InternalServerError;
  logger.error(`${errorCode}: ${message}`);
  return res.status(statusCode).json({ message });
};
