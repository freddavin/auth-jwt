import 'express-async-errors';
import express from 'express';
import { logger } from '../winston';
import { userRouter } from '../../routes';
import { endpointError, errorHandler } from '../custom.errors';

export const bootstrapExpress = (port: number) => {
  const app = express();

  app.use(express.json());
  app.use('/users', userRouter);
  app.use(errorHandler);
  app.use(endpointError);

  app.listen(port, () => {
    logger.info('🚀 [Express] Bootstrapped', { port });
  });
};
