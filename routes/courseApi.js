const express = require('express');
const { createCourse, updateCourse, deleteCourse, getCourseById } = require('../controllers/coursemanaging');
const { validateEducatedManager, validateEducatedManagerorstudent } = require('../middleware/validateToken');

const Router = express.Router();

Router.post('/',validateEducatedManager , createCourse);
Router.put('/:id',validateEducatedManager , updateCourse);
Router.delete('/:id',validateEducatedManager , deleteCourse);

Router.get('/:id',validateEducatedManagerorstudent , getCourseById);

module.exports = Router;