import { Express } from 'express';
import { userController } from './user.controller';

export const routes = (app: Express) => {
  app.get('/users', (req, res) => {
    const result = userController(req);
    res.status(200).send(result);
  });
};
