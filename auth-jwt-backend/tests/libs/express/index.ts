import { createServer } from '../../../src/libs/express';
import { Express } from 'express';

export let expressApp: Express;

export const bootstrapExpress = () => {
  expressApp = createServer();
};
