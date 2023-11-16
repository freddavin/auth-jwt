import request from "supertest";
import { expressApp } from "../libs/express";
import { IUser } from "../../src/models/user";
import { listUserById } from "../../src/services/users";

describe("Auth Controller - Integration Tests", () => {
  describe("Register Handler", () => {
    it("When a valid input request is sent. Then should be able to register an user", async () => {
      const user: IUser = {
        name: "test_name",
        email: "test@test.com",
        password: "test123",
      };

      const response = await request(expressApp)
        .post(`/auth/register`)
        .send(user);
      const { id } = response.body;

      const expectedUser = await listUserById(id);
      expect(id).toEqual(expectedUser.id);
    });
  });
});
