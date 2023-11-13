import { Router } from "express";
import {
  readUsersHandler,
  readUserHandler,
  deleteUserHandler,
  updateUserHandler,
} from "../controllers";

export const userRouter = Router();

userRouter.get("/", readUsersHandler);
userRouter.get("/:id", readUserHandler);
userRouter.delete("/:id", deleteUserHandler);
userRouter.patch("/:id", updateUserHandler);
