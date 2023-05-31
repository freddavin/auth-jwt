import express from 'express';
import {
  getUsersHandler,
  getUserHandler,
  createUserHandler,
} from '../controllers/user.controller';
import { authHandler } from '../controllers/auth.controller';

export const userRouter = express.Router();
export const authRouter = express.Router();

userRouter.get('/', getUsersHandler);
userRouter.get('/:id', getUserHandler);
userRouter.post('/', createUserHandler);

authRouter.post('/', authHandler);
