const express = require('express');
const { getProfessors } = require('../controllers/professorsApi');
const { validateEducatedManager } = require('../middleware/validateToken');

const Router = express.Router();

Router.get('/',validateEducatedManager , getProfessors);


module.exports = Router;