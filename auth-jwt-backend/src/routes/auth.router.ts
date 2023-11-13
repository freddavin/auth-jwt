import { Router } from "express";
import { registerHandler, loginHandler } from "../controllers";

export const authRouter = Router();

authRouter.post("/register", registerHandler);
authRouter.post("/login", loginHandler);
