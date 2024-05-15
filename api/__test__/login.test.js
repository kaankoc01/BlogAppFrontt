const request = require('supertest');
const app = require('../index.js');

describe('POST /login', () => {
  it('should login user with correct credentials', async () => {
    jest.setTimeout(10000);
    const response = await request(app)
      .post('/api/auth/login') // Rotanın tam adresini belirtin
      .send({
        username: 'resuldas1',
        password: 'resuldas'
      });

    expect(response.status).toBe(200);
    expect(response.body.username).toBe('resuldas1');
    // Diğer doğrulamaları ekleyebilirsiniz
  });

  // Diğer test senaryolarını ekleyin
});
