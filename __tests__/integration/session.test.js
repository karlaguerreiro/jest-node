const requyest = require('supertest');

const app = require('../../src/app');

const { User } = require('../../src/app/models');
// Exemplo de teste: A rota /authenticate deve retornar um token JWT quando for chamada com credenciais validas

describe('Authentication', () => {

  it('should authenticate with valid credentials', async () => {
      const user = await User.create({
          name: 'Karla',
          email: 'karlaguerreiro@hotmail.com',
          password_hash: '123456'
      });

        const response = await requyest(app)
        .post('/sessions')
        .send({
            email: user.email,
            password: '123456'
        });

        expect(response.status).toBe(200);
    });
});
