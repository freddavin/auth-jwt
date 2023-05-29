import { Request } from 'express';
import { logger } from '../libs/winston';

export const findUsers = (_: Request) => {
  const usersFound = [
    {
      id: '123',
      name: 'fred',
      email: 'fred@fred.com',
    },
    {
      id: '124',
      name: 'laliny',
      email: 'laliny@laliny.com',
    },
  ];
  logger.info('Users found', { usersFound });
  return usersFound;
};

export const findUser = (params: Record<string, any>) => {
  const userFound = {
    id: params.userId,
    name: 'fred',
    email: 'fred@fred.com',
  };
  logger.info('Users found', { userFound });
  return userFound;
};
