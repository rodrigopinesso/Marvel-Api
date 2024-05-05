import { describe, expect, it } from "@jest/globals";
import request from "supertest"
import app from "../src/app"

describe('Testes para operações CRUD de Quadrinhos', () => {
  let comicId: string;

  it('Deve criar um quadrinho', async () => {
    const res = await request(app)
      .post('/comics')
      .send({
        titulo: 'Meu Primeiro Quadrinho',
        descricao: 'Uma história emocionante',
        dataPublicacao: '2022-05-25',
        capa: 'http://exemplo.com/capa.jpg'
      });

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty('_id');
    comicId = res.body._id;
  });

  it('Deve obter todos os quadrinhos', async () => {
    const res = await request(app).get('/comics');
    expect(res.status).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
  });

  it('Deve obter um quadrinho específico', async () => {
    const res = await request(app).get(`/comics/${comicId}`);
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('_id', comicId);
  });

  it('Deve atualizar um quadrinho', async () => {
    const res = await request(app)
      .put(`/comics/${comicId}`)
      .send({
        titulo: 'Meu Quadrinho Modificado',
        descricao: 'Uma história ainda mais emocionante',
        dataPublicacao: '2022-05-25',
        capa: 'http://exemplo.com/capa_modificada.jpg'
      });

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('titulo', 'Meu Quadrinho Modificado');
    expect(res.body).toHaveProperty('descricao', 'Uma história ainda mais emocionante');
  });

  it('Deve excluir um quadrinho', async () => {
    const res = await request(app).delete(`/comics/${comicId}`);
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('_id', comicId);
  });
});
