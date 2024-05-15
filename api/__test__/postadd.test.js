const request = require('supertest');
const app = require('../index.js');

describe('POST /api/posts', () => {
  it('should create a new post', async () => {
    jest.setTimeout(10000);
    const response = await request(app)
      .post('/api/posts/')
      .send({
        // Post oluşturmak için gerekli verileri buraya ekleyin
        // Örneğin:
        username:'resuldas',
        title: 'postadd.test.js deneme (başlık) ',
        desc: 'postadd.test.js deneme içeriği .',
        // Diğer gerekli verileri buraya ekleyin
      });

    expect(response.status).toBe(200);
    // Oluşturulan postun dönüş değerlerini ve durumlarını doğrulamak için ek kontroller yapabilirsiniz.
  });

  // Diğer test senaryolarını ekleyebilirsiniz
});