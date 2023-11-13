import { Router } from "express";
import {
  readUsersHandler,
  readUserHandler,
  deleteUserHandler,
  updateUserHandler,
} from "../controllers";
import { checkToken } from "../middlewares/check.token";

export const userRouter = Router();

userRouter.get("/", checkToken, readUsersHandler);
userRouter.get("/:id", checkToken, readUserHandler);
userRouter.delete("/:id", checkToken, deleteUserHandler);
userRouter.patch("/:id", checkToken, updateUserHandler);
