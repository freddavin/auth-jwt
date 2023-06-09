import { IUser } from '../../src/models/user';
import { createUser, listUsers } from '../../src/services/users';

describe('fake test', () => {
  it('fake test', async () => {
    const user: IUser = {
      name: 'test_name',
      email: 'test@test.com',
      password: 'test123',
    };
    console.log(user);
    await createUser(user);

    const users = await listUsers();
    users.forEach((user) => console.log(user));
    expect(true).toBeTruthy();
  });
});
