import express from 'express';
import {
  getUsersHandler,
  getUserHandler,
} from '../controllers/user.controller';

export const userRouter = express.Router();

userRouter.get('/', getUsersHandler);
userRouter.get('/:userId', getUserHandler);
