import mongoose from "mongoose";
import { logger } from "../winston";

export const bootstrapMongoDb = async () => {
  const uri = process.env.MONGODB_URI || "";
  await mongoose.connect(uri);
  logger.info("🚀 [MongoDB] Bootstrapped");
};

export const disposeMongoDb = async () => {
  await mongoose.disconnect();
  await mongoose.connection.close();
  logger.info("🔥 [MongoDB] Disposed");
};
