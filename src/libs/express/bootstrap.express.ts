import express from 'express';
import { logger } from '../winston';

export const bootstrapExpress = (port: number) => {
  const app = express();

  app.listen(port, () => {
    logger.info('🚀 [Express] Bootstrapped', { port });
  });
};
