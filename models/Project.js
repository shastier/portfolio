const db = require('../db/config');

class Project {
    constructor(name, description, deploy_url, github_url, date, category_id, id) {
        this.id = id || null;
        this.name = name;
        this.description = description;
        this.deploy_url = deploy_url;
        this.github_url = github_url;
        this.date = date;
        this.category_id = category_id;        
    }
    
    static getAll() {
      return db
        .manyOrNone('SELECT * FROM projects ORDER BY id ASC')
        .then((projects) => {
          return projects.map((project) => {
            return new this(project);
          });
        });
    }
    
    static getById(id) {
      return db
        .oneOrNone('SELECT * FROM projects WHERE id = $1', id)
        .then((project) => {
          if (project) return new this(
            project.id, 
            project.name,
            project.description,
            project.deploy_url,
            project.github_url,
            project.date,
            project.category_id  
          );
          throw new Error('Project not found');
        });
    }
}

module.exports = Project;