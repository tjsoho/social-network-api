const Router = require('express').Router();

const API = require('./api');

Router.use('/api', API);

module.exports = Router;

