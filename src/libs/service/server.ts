import { bootstrapExpress } from '../express';
import { bootstrapMongoDb } from '../mongodb';

export const server = (port: number) => {
  bootstrapMongoDb();
  bootstrapExpress(port);
};
