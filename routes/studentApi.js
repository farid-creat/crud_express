const express = require('express');
const { getStudentById, updateStudentByusername } = require('../controllers/studentController');
const { validateEducatedManager, validateStudent, validateStudentId } = require('../middleware/validateToken');

const Router = express.Router();

Router.get('/:id',validateEducatedManager , getStudentById);


Router.put('/:id',validateStudent,validateStudentId , updateStudentByusername);


module.exports = Router;