const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const configExpress = (app) => {
  app.use(cors());
  app.use(express.json());
  app.use(morgan('dev'));
}

module.exports = configExpress;