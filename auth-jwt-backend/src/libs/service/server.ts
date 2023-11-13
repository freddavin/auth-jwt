import { bootstrapExpress, disposeExpress } from "../express";
import { bootstrapMongoDb, disposeMongoDb } from "../mongodb";
import { logger } from "../winston";

export const server = async (port: number) => {
  try {
    disposeExpress();
    await disposeMongoDb();

    await bootstrapMongoDb();
    bootstrapExpress(port);
  } catch (e) {
    logger.error("Something went wrong", { error: e });
  }
};
