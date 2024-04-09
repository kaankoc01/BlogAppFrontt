const request = require('supertest');
const app = require('../index.js');
const mongoose = require('mongoose'); // Mongoose'ı import etmeyi unutmayın

describe('GET /api/posts/:id', () => {
  it('should get an existing post', async () => {
    jest.setTimeout(10000);

    // Öncelikle, alınacak postun kimliğini belirleyin
    const postId = '660f4a1d57d0266188c28a40'; // Alınacak postun gerçek kimliğini buraya yerleştirin

    const response = await request(app)
      .get(`/api/posts/${postId}`); // GET isteği gönderirken alınacak postun kimliğini belirtin

    // Beklenen durum 200 OK ise, istek başarılı oldu demektir
    expect(response.status).toBe(200);
    
    // Dönen verinin formatını ve içeriğini kontrol etmek için ek kontroller yapabilirsiniz
    // Örneğin, dönen verinin bir post olması ve beklenen postun belirli bir kimliğe sahip olması gibi

    // Dönen verinin bir post olup olmadığını kontrol edin
    expect(response.body).toHaveProperty('_id');
    expect(response.body).toHaveProperty('username');
    expect(response.body).toHaveProperty('title');
    expect(response.body).toHaveProperty('desc');

    // Dönen verinin doğru kimliğe sahip olup olmadığını kontrol edin
    expect(response.body._id).toBe(postId);

    // Dönen verinin diğer beklenen özelliklerini kontrol edebilirsiniz

  });

  // Diğer test senaryolarını ekleyebilirsiniz
});
