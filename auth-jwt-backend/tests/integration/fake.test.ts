import request from 'supertest';
// import { Types } from 'mongoose';
import { expressApp } from '../libs/express';
import { IUser } from '../../src/models/user';
import { listUserById } from '../../src/services/users';

describe('User Controller - Integration Tests', () => {
  describe('Create User', () => {
    // it('fake test', async () => {
    //   const userId = new Types.ObjectId().toString();

    //   await request(expressApp)
    //     .get(`/users/${userId}`)
    //     .expect(404, { message: 'User not found' });
    // });

    // it('fake test', async () => {
    //   await request(expressApp).get(`/users`).expect(200);
    // });

    it('When a valid input request is sent. Then should be able to create an user', async () => {
      const user: IUser = {
        name: 'test_name',
        email: 'test@test.com',
        password: 'test123',
      };

      const response = await request(expressApp).post(`/users`).send(user);
      const { id: resultId } = response.body;

      const expectedUser = await listUserById({ id: resultId });
      expect(resultId).toEqual(expectedUser.id);
    });
  });
});
