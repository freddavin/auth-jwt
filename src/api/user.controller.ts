import { Request } from 'express';
import { logger } from '../libs/winston';

export const userController = (req: Request) => {
  const { body } = req;
  logger.info('message received', { body });
  return { message: 'ok' };
};
