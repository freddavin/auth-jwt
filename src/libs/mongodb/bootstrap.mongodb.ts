import mongoose from 'mongoose';
import config from 'config';
import { logger } from '../winston';

const uri = config.get<string>('MONGODB_URI');

export const bootstrapMongoDb = () => {
  mongoose
    .connect(uri)
    .then(() => logger.info('🚀 [MongoDB] Bootstrapped'))
    .catch((error) => {
      logger.error('Something went wrong', { error });
      process.exit(1);
    });
};
