const request = require('supertest');
const app = require('../index.js');

describe('POST /api/posts', () => {
  it('should create a new post and then update it', async () => {
    jest.setTimeout(10000);


    // Yeni bir post oluşturma
    const createResponse = await request(app)
      .post('/api/posts/')
      .send({
        username: 'onurkaya',
        title: 'title oluşturdum.',
        desc: 'fonksiyonellik testi.',
      });
    expect(createResponse.status).toBe(200);
    const postId = createResponse.body._id;

    // Oluşturulan postu güncelleme
    const updateResponse = await request(app)
      .put(`/api/posts/${postId}`)
      .send({
        username: 'resuldas',
        title: 'fonskiyonellik testi update.',
        desc: 'fonksiyonellik testi update etme.',
      });

    expect(updateResponse.status).toBe(200);
    // Güncellenen postun dönüş değerlerini ve durumlarını doğrulamak için ek kontroller yapabilirsiniz.
  });

  // Diğer test senaryolarını ekleyebilirsiniz
});

//yük testi senaryosu : 300 farklı kullanıcının 30 saniye içinde giriş yapması isteniyor. saniyede 10 kullanıcı giriş yapacak.
