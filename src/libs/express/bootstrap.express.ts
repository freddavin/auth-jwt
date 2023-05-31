import express from 'express';
import { logger } from '../winston';
import { authRouter, userRouter } from '../../routes';

export const bootstrapExpress = (port: number) => {
  const app = express();

  app.use(express.json());
  app.use('/users', userRouter);
  app.use('/auth', authRouter);

  app.listen(port, () => {
    logger.info('🚀 [Express] Bootstrapped', { port });
  });
};
