import { bootstrapExpress } from '../express';
import { bootstrapMongoDb } from '../mongodb';
import { logger } from '../winston';

export const server = (port: number) => {
  try {
    bootstrapMongoDb();
    bootstrapExpress(port);
  } catch (e) {
    logger.error('Something went wrong', { error: e });
  }
};
