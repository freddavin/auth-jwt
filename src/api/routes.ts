import { Express } from 'express';
import { userController } from './user.controller';

export const routes = (app: Express) => {
  app.get('/users', userController);
};
