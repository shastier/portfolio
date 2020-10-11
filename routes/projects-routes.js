const express = require('express');
const projectsRoutes = express.Router();

const projectsController = require('../controllers/projects-controller');

// root route, /api/projects
projectsRoutes.get('/', projectsController.index);

// show details for an specific project, /api/projects/:id
projectsRoutes.get('/', projectsController.show);

module.exports = projectsRoutes;