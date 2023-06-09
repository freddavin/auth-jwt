import mongoose from 'mongoose';
import config from 'config';
import { logger } from '../winston';

const uri = config.get<string>('MONGODB_URI');

export const bootstrapMongoDb = async () => {
  await mongoose.connect(uri);
  logger.info('🚀 [MongoDB] Bootstrapped');
};

export const disposeMongoDb = async () => {
  await mongoose.disconnect();
  await mongoose.connection.close();
  logger.info('🔥 [MongoDB] Disposed');
};
