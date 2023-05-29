import express from 'express';
import {
  getUsersHandler,
  getUserHandler,
  createUserHandler,
} from '../controllers/user.controller';

export const userRouter = express.Router();

userRouter.get('/', getUsersHandler);
userRouter.get('/:id', getUserHandler);
userRouter.post('/', createUserHandler);
