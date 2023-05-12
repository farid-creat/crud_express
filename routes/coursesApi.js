const express = require('express');
const { getCourses } = require('../controllers/coursesControll');
const { validateEducatedManagerorstudent } = require('../middleware/validateToken');

const Router = express.Router();

Router.get('/courses',validateEducatedManagerorstudent , getCourses);


module.exports = Router;