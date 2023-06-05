const express = require('express');
const { getProfessorById, updateProfessorByusername } = require('../controllers/professorController');
const { getStudentById } = require('../controllers/studentController');
const { validateEducatedManager, validateProfessor, validateProfessorId } = require('../middleware/validateToken');

const Router = express.Router();

Router.get('/:id',validateEducatedManager , getProfessorById);



Router.put('/:id',validateProfessor,validateProfessorId , updateProfessorByusername);


module.exports = Router;