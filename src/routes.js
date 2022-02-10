const routes = require('express').Router();


const SessionController = require('./app/controllers/SessionController');
// Rota para listar todos os usuários

routes.post('/sessions', SessionController.store);


module.exports = routes;

