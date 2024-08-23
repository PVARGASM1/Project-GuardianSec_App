const express = require('express');
const configExpress = require('./express');
const userRoutes = require('./api/user'); // Importa las rutas
const consultingRoutes = require('./api/consulting'); // Importa las rutas

const app = express();

// setup Express:
configExpress(app);

// Configura las rutas de usuario
app.use('/', userRoutes);

// Configura las rutas de consultarias
app.use('/', consultingRoutes);

module.exports = app;
