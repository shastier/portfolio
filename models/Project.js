const db = require('../db/config');

class Project {
    constructor(id, name, description, deploy_url, github_url, date, category_id) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.deploy_url = deploy_url;
        this.github_url = github_url;
        this.date = date;
        this.category_id = category_id;        
    }
    
    static getAll() {
      return db
        .manyOrNone(`SELECT projects.id, projects.name, projects.description,
                        projects.deploy_url,
                        projects.github_url,                        
                        projects.date,
                        project_images.img_url
                      FROM projects 
                        JOIN project_images
                        ON  projects.id = project_images.project_id;`)
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