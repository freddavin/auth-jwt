import { NextFunction, Request, Response } from 'express';
import { logger } from '../winston';
import { GeneralErrorCode } from './types';

export const endpointError = (
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  const message = 'Endpoint not found';
  logger.error(`${GeneralErrorCode.NotFoundError}: ${message}`);
  return res.status(404).json({ message });
};
