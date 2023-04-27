const express = require('express');
const { getAllProfessor, addProfessor, getAllProfessorById, updateProfessor } = require('../controllers/ItManager');

const Router = express.Router();

Router.get('/Professors' , getAllProfessor);
Router.post('/Professor' , addProfessor);
Router.get('/Professor/:id' , getAllProfessorById);
Router.put('/Professor/:id' , updateProfessor);
module.exports = Router;