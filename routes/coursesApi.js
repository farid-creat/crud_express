const express = require('express');
const { getCourses } = require('../controllers/coursesControll');
const { validateEducatedManagerorstudentorProfessor } = require('../middleware/validateToken');

const Router = express.Router();

Router.get('/',validateEducatedManagerorstudentorProfessor , getCourses);


module.exports = Router;