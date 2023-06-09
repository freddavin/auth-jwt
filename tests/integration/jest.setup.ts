import { logger } from '../../src/libs/winston';
import {
  bootstrapMongoDb,
  disposeMongoDb,
} from '../libs/mongodb/bootstrap.mongodb';

beforeAll(async () => {
  logger.silent = true;
  await bootstrapMongoDb();
});

afterAll(async () => {
  await disposeMongoDb();
  logger.silent = false;
});
