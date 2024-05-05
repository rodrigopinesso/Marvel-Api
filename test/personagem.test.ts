import request from "supertest";
import app from "../src/app"

describe('Testes para operações CRUD de Personagens', () => {
  let personagemId: string;

  it('Deve criar um personagem', async () => {
    const res = await request(app)
      .post('/personagens')
      .send({
        nome: 'Homem-Aranha',
        descricao: 'Um super-herói aracnídeo',
        imagemurl: 'http://exemplo.com/homem-aranha.jpg'
      });

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty('_id');
    personagemId = res.body._id;
  });

  it('Deve obter todos os personagens', async () => {
    const res = await request(app).get('/personagens');
    expect(res.status).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
  });

  it('Deve obter um personagem específico', async () => {
    const res = await request(app).get(`/personagens/${personagemId}`);
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('_id', personagemId);
  });

  it('Deve atualizar um personagem', async () => {
    const res = await request(app)
      .put(`/personagens/${personagemId}`)
      .send({
        nome: 'Homem-Aranha Modificado',
        descricao: 'Um super-herói aracnídeo com uma nova descrição',
        imagemurl: 'http://exemplo.com/homem-aranha_modificado.jpg'
      });

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('nome', 'Homem-Aranha Modificado');
    expect(res.body).toHaveProperty('descricao', 'Um super-herói aracnídeo com uma nova descrição');
  });

  it('Deve excluir um personagem', async () => {
    const res = await request(app).delete(`/personagens/${personagemId}`);
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('_id', personagemId);
  });
});
