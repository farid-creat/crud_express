const express = require('express');
const { getAllProfessor, addProfessor, getAllProfessorById, updateProfessor, deleteProfessor, getAllStudent, addStudent, getAllStudentById, deleteStudent, updateStudent, getAllmanager, addmanager, getAllManagerById, deleteManager, updateManager } = require('../controllers/ItManager');

const Router = express.Router();
  

Router.post('/Professor' , addProfessor);
Router.get('/Professors' , getAllProfessor);
Router.put('/Professor/:id' , updateProfessor);
Router.delete('/Professor/:id' , deleteProfessor);
Router.get('/Professor/:id' , getAllProfessorById);
Router.post('/student' , addStudent);

Router.get('/students' , getAllStudent);

Router.get('/student/:id' , getAllStudentById);
Router.delete('/student/:id' , deleteStudent);
Router.put('/student/:id' , updateStudent);



Router.get('/managers' , getAllmanager);
Router.post('/manager' , addmanager);
Router.get('/manager/:id' , getAllManagerById);
Router.delete('/manager/:id' , deleteManager);
Router.put('/manager/:id' , updateManager);



module.exports = Router;