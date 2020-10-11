const Project = require('../models/Project');

const projectsController = {};

// get all projects
projectsController.index = (req, res, next) => {
    Project.getAll()
    .then((projects) => {
      res.json({
        message: 'ok',
        data: { projects },        
      });
    })
    .catch(next);
};

// get details for an specific project by its ID
projectsController.show = (req, res, next) => {
    Project.getById(req.params.id)
    .then((project) => {
      res.json({
        message: 'ok',
        data: { project },        
      });
    })
    .catch(next);
};

module.exports = projectsController;