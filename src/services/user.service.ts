import { Request } from 'express';
import { logger } from '../libs/winston';

export const userService = (req: Request) => {
  const { body } = req;
  logger.info('message received', { body });
  return { message: 'ok' };
};
