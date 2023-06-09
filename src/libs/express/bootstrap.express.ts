import 'express-async-errors';
import express from 'express';
import { logger } from '../winston';
import { userRouter } from '../../routes';
import { endpointError, errorHandler } from '../custom.errors';

let instance: any;

const createServer = () => {
  const app = express();

  app.use(express.json());
  app.use('/users', userRouter);
  app.use(errorHandler);
  app.use(endpointError);

  return app;
};

export const bootstrapExpress = (port: number) => {
  const app = createServer();

  instance = app.listen(port, () => {
    logger.info('🚀 [Express] Bootstrapped', { port });
  });
};

export const disposeExpress = () => {
  instance.close();
  logger.info('🔥 [Express] Disposed');
};
