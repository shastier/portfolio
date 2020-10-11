const express = require('express');
const projectsRoutes = express.Router();

const projectsController = require('../controllers/projects-controller');

// root route, /api/portfolio/projects
projectsRoutes.get('/', projectsController.index);

// show details for an specific project, /api/portfolio/projects/:id
projectsRoutes.get('/:id', projectsController.show);

module.exports = projectsRoutes;