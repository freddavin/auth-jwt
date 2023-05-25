import express from 'express';
import { logger } from '../winston';
import { routes } from '../../api';

export const bootstrapExpress = (port: number) => {
  const app = express();
  app.use(express.json());

  app.listen(port, () => {
    routes(app);
    logger.info('🚀 [Express] Bootstrapped', { port });
  });
};
