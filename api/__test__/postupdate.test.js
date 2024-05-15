const request = require('supertest');
const app = require('../index.js');

describe('PUT /api/posts/:id', () => {
  it('should update an existing post', async () => {
    jest.setTimeout(10000);

    // Öncelikle, güncellenecek postun kimliğini belirleyin
    const postId = '6628c4c3ccedd57e3dbadd68'; // Güncellenmesi gereken postun gerçek kimliğini buraya yerleştirin

    const response = await request(app)
      .put(`/api/posts/${postId}`) // PUT isteği gönderirken güncellenecek postun kimliğini belirtin
      .send({
        // Güncellenmiş verileri buraya ekleyin
        // Örneğin:
        username: 'resuldas',
        title: 'hocanın yanında güncelleme',
        desc: 'Güncellemeyi yaptım.',
        // Diğer güncellenmiş verileri buraya ekleyin
      });

    // Beklenen durum 200 OK ise, güncelleme başarılı oldu demektir
    expect(response.status).toBe(200);
    // Güncellenen postun dönüş değerlerini ve durumlarını doğrulamak için ek kontroller yapabilirsiniz.
  });

  // Diğer test senaryolarını ekleyebilirsiniz
});
