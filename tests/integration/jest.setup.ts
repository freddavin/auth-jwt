import { logger } from '../../src/libs/winston';
import {
  bootstrapMongoDb,
  disposeMongoDb,
} from '../libs/mongodb/bootstrap.mongodb';
import { bootstrapExpress } from '../libs/express';

beforeAll(async () => {
  logger.silent = true;
  await bootstrapMongoDb();
  bootstrapExpress();
});

afterAll(async () => {
  await disposeMongoDb();
  logger.silent = false;
});
