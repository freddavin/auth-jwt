import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';

export const bootstrapMongoDb = async () => {
  const server = await MongoMemoryServer.create();

  await mongoose.connect(server.getUri());
};

export const disposeMongoDb = async () => {
  await mongoose.disconnect();
  await mongoose.connection.close();
};
