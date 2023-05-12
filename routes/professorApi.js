const express = require('express');
const { getProfessorById } = require('../controllers/professorController');
const { getStudentById } = require('../controllers/studentController');
const { validateEducatedManager } = require('../middleware/validateToken');

const Router = express.Router();

Router.get('/:id',validateEducatedManager , getProfessorById);


module.exports = Router;