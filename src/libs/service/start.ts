import { bootstrapExpress } from '../express';
import { bootstrapMongoDb } from '../mongodb';

export const start = (port: number) => {
  bootstrapMongoDb();
  bootstrapExpress(port);
};
