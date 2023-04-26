const express = require('express');
const { getAllProfessor, addProfessor } = require('../controllers/ItManager');

const Router = express.Router();

Router.get('/Professors' , getAllProfessor);
Router.post('/Professor' , addProfessor);
module.exports = Router;