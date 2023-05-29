import { Express } from 'express';
import { userController } from '../controllers';

export const routes = (app: Express) => {
  app.get('/users', userController);
};
