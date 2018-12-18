import express from 'express';

module.exports = app => {
  // Configuraciones
  app.set('port', process.env.PORT || 3000);

  // Middlewares
  app.use(express.json())
};
