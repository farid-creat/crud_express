const express = require('express');
const { createCourse } = require('../controllers/coursemanaging');
const { validateEducatedManager } = require('../middleware/validateToken');

const Router = express.Router();

Router.post('/course',validateEducatedManager , createCourse);
Router.post('/course/:id',validateEducatedManager , updateCourse);



module.exports = Router;