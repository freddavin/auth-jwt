import "express-async-errors";
import express from "express";
import cors from "cors";
import { logger } from "../winston";
import { authRouter, userRouter } from "../../routes";
import { endpointError, errorHandler } from "../custom.errors";

let instance: any;

export const createServer = () => {
  const app = express();

  app.use(express.json());
  app.use(cors());
  app.use("/users", userRouter);
  app.use("/auth", authRouter);
  app.use(errorHandler);
  app.use(endpointError);

  return app;
};

export const bootstrapExpress = (port: number) => {
  const app = createServer();

  instance = app.listen(port, () => {
    logger.info("🚀 [Express] Bootstrapped", { port });
  });
};

export const disposeExpress = () => {
  if (instance) instance.close();
  logger.info("🔥 [Express] Disposed");
};
