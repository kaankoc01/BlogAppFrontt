const request = require('supertest');
const app = require('../index.js');

describe('DELETE /api/posts/:id', () => {
  it('should delete an existing post', async () => {
    jest.setTimeout(10000);

    // Öncelikle, silinecek postun kimliğini belirleyin
    const postId = '6628c4c3ccedd57e3dbadd68'; // Silinmesi gereken postun gerçek kimliğini buraya yerleştirin

    const response = await request(app)
      .delete(`/api/posts/${postId}`) // DELETE isteği gönderirken silinecek postun kimliğini belirtin
      .send({
        // Güncellenmiş verileri buraya ekleyin
        // Örneğin:
        _id: '6628c4c3ccedd57e3dbadd68',
        username: 'resuldas',
        title: 'hocanın yanında güncelleme',
        desc: 'x',
        // Diğer güncellenmiş verileri buraya ekleyin
      });

    // Beklenen durum 200 OK ise, silme başarılı oldu demektir
    expect(response.status).toBe(200);
    // Silinen postun dönüş değerlerini ve durumlarını doğrulamak için ek kontroller yapabilirsiniz.
  });

  // Diğer test senaryolarını ekleyebilirsiniz
});
