import express from 'express';
import AutoresController from '../controllers/autoresController.js';
import knex from 'knex';

const router = express.Router();

router
  .get('/autores/:id/livros', AutoresController.listarLivrosPorAutor)
  .get('/autores/:id', AutoresController.listarAutorPorId)
  .get('/autores', AutoresController.listarAutores)
  .post('/autores', AutoresController.cadastrarAutor)
  .put('/autores/:id', AutoresController.atualizarAutor)
  .delete('/autores/:id', AutoresController.excluirAutor);

export default router;
