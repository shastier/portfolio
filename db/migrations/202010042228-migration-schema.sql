CREATE TABLE IF NOT EXISTS categories (
	id SERIAL PRIMARY KEY,
	title VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS projects (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  description TEXT,
  case_study TEXT,
  deploy_url VARCHAR(255),
  github_url VARCHAR(255),
  video_url VARCHAR(255),
  date  DATE,
  is_collaborative BOOLEAN DEFAULT 'false',
  category_id INTEGER NOT NULL,
  FOREIGN KEY (category_id) REFERENCES categories(id)
);

CREATE TABLE IF NOT EXISTS project_images (
  id SERIAL PRIMARY KEY,
  description TEXT,
  img_url VARCHAR(255),
  project_id INTEGER NOT NULL,
  FOREIGN KEY (project_id) REFERENCES projects(id)
);

CREATE TABLE IF NOT EXISTS skills (
	id SERIAL PRIMARY KEY,
	type VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS technologies (
	id SERIAL PRIMARY KEY,
	title VARCHAR(255) NOT NULL UNIQUE,
  skill_id INTEGER NOT NULL,
  FOREIGN KEY (skill_id) REFERENCES skills(id)
);

CREATE TABLE IF NOT EXISTS technologies_used (
	id SERIAL PRIMARY KEY,
  comfort_level NUMERIC DEFAULT 0,
	technology_id INTEGER NOT NULL,
  skill_id INTEGER NOT NULL,
  FOREIGN KEY (skill_id) REFERENCES skills(id),
  FOREIGN KEY (technology_id) REFERENCES technologies(id)
);