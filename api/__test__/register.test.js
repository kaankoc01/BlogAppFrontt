const request = require('supertest');
const app = require('../index.js');
const User = require('../models/User');

describe('POST /register', () => {
  it('should register user if email is unique', async () => {
    jest.setTimeout(10000);

    // Yeni kullanıcı oluştururken kullanılacak e-posta adresi ve kullanıcı adı
    const email = 'resuldas@gmail.com';
    const username = 'resuldas';
    // E-posta adresi ve kullanıcı adı veritabanında mevcut mu diye kontrol et
    const existingEmailUser = await User.findOne({ email });
    if (existingEmailUser) {
      // Eğer e-posta adresi mevcut ise hata döndür
      throw new Error('Ayni email ile kullanici veritabaninda zaten kayitli.');
    }

    const existingUsernameUser = await User.findOne({ username });
    if (existingUsernameUser) {
      // Eğer kullanıcı adı mevcut ise hata döndür
      throw new Error('Ayni kullanici adi ile kullanici veritabaninda zaten kayitli.');
    }
    // Eğer e-posta adresi ve kullanıcı adı mevcut değilse yeni bir kullanıcı oluştur
    const response = await request(app)
      .post('/api/auth/register')
      .send({
        username,
        email,
        password: 'resuldas'
      });
    expect(response.status).toBe(200);
    expect(response.body.username).toBe(username);

  });
});
