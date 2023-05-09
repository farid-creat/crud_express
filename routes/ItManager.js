const express = require('express');
const { getAllProfessor, addProfessor, getAllProfessorById, updateProfessor, deleteProfessor, getAllStudent, addStudent, getAllStudentById, deleteStudent, updateStudent } = require('../controllers/ItManager');

const Router = express.Router();

Router.get('/Professors' , getAllProfessor);
Router.post('/Professor' , addProfessor);
Router.get('/Professor/:id' , getAllProfessorById);
Router.delete('/Professor/:id' , deleteProfessor);
Router.put('/Professor/:id' , updateProfessor);



Router.get('/students' , getAllStudent);
Router.post('/student' , addStudent);
Router.get('/student/:id' , getAllStudentById);
Router.delete('/student/:id' , deleteStudent);
Router.put('/student/:id' , updateStudent);


module.exports = Router;