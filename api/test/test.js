
const request = require('supertest');
const app = require('../index.js');

describe('POST /register', () => {
  it('should login user with correct credentials', async () => {
    jest.setTimeout(10000);
    const response = await request(app)
      .post('/api/auth/register') // Rotanın tam adresini belirtin
      .send({
        username: 'registertest',
        email : 'registertest@gmail.com',
        password: 'registertest'
      });

    expect(response.status).toBe(200);
    expect(response.body.username).toBe('registertest');
    // Diğer doğrulamaları ekleyebilirsiniz
  });

  // Diğer test senaryolarını ekleyin
});
