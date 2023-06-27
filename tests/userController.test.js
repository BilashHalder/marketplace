// userController.test.js

const request = require('supertest');
const app = require('../app');
const userService = require('../src/services/userService');

describe('User Controller', () => {
  it('should register a new user', async () => {
    const newUser = { name: 'John Doe', email: 'johndoe@example.com', phone: '1234567890', password: 'password' };
    
    jest.spyOn(userService, 'registerUser').mockImplementation(() => {
      return Promise.resolve(newUser);
    });

    const response = await request(app)
      .post('/api/users/register')
      .send(newUser);

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(newUser);
  });
});
