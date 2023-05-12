const express = require('express');
const { getStudents } = require('../controllers/studentsController');
const { validateEducatedManager } = require('../middleware/validateToken');

const Router = express.Router();

Router.get('/',validateEducatedManager , getStudents);


module.exports = Router;