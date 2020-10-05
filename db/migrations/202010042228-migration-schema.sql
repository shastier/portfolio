CREATE TABLE IF NOT EXISTS categories (
	id SERIAL PRIMARY KEY,
	title VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS users (
	id SERIAL PRIMARY KEY,
	first_name VARCHAR(255) NOT NULL,
	last_name VARCHAR(255),
  title VARCHAR(255),
  company VARCHAR(255),
	email VARCHAR(100) ,
  phone TEXT,
	username VARCHAR(255) NOT NULL UNIQUE,
	password_digest TEXT NOT NULL,  
  is_job_seeker BOOLEAN DEFAULT false
);

CREATE TABLE IF NOT EXISTS job_seekers (
	id SERIAL PRIMARY KEY,
  linkedin VARCHAR(255),
	github VARCHAR(255),	
	location VARCHAR(100) NOT NULL,
  brand_statement VARCHAR(255), 
  user_id INTEGER,  
  FOREIGN KEY (user_id) REFERENCES users(id) 
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
  job_seeker_id INTEGER NOT NULL,
  FOREIGN KEY (job_seeker_id) REFERENCES job_seekers(id),
  FOREIGN KEY (category_id) REFERENCES categories(id)
);

CREATE TABLE IF NOT EXISTS project_images (
  id SERIAL PRIMARY KEY,
  description VARCHAR(255),
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
  project_id INTEGER NOT NULL,
  FOREIGN KEY (skill_id) REFERENCES skills(id),
  FOREIGN KEY (project_id) REFERENCES projects(id)
);

CREATE TABLE IF NOT EXISTS posts (
	id SERIAL PRIMARY KEY,
	post VARCHAR(255) NOT NULL,
  date DATE, 
  user_id INTEGER NOT NULL,
  project_id INTEGER NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (project_id) REFERENCES projects(id)
);

CREATE TABLE IF NOT EXISTS messages (
	id SERIAL PRIMARY KEY,
  subject VARCHAR(255) NOT NULL,
	message TEXT NOT NULL,
  name VARCHAR(255) NOT NULL,	
	email VARCHAR(100) NOT NULL,
  date DATE, 
  user_id INTEGER,  
  FOREIGN KEY (user_id) REFERENCES users(id) 
);

CREATE TABLE IF NOT EXISTS educations (
	id SERIAL PRIMARY KEY,
  institute VARCHAR(255) NOT NULL,
	location VARCHAR(255),
  name VARCHAR(255) NOT NULL,  		
  graduation_date DATE, 
  job_seeker_id INTEGER NOT NULL,  
  FOREIGN KEY (job_seeker_id) REFERENCES job_seekers(id) 
);

CREATE TABLE IF NOT EXISTS works (
	id SERIAL PRIMARY KEY,
  company VARCHAR(255) NOT NULL,
	location VARCHAR(255),
  title VARCHAR(255) NOT NULL,  		
  start_date DATE, 
  end_date DATE, 
  is_current_employer BOOLEAN DEFAULT false,
  job_seeker_id INTEGER NOT NULL,  
  FOREIGN KEY (job_seeker_id) REFERENCES job_seekers(id) 
);

CREATE TABLE IF NOT EXISTS responsabilities (
	id SERIAL PRIMARY KEY,
  description TEXT NOT NULL,	
  work_id INTEGER NOT NULL,  
  FOREIGN KEY (work_id) REFERENCES works(id) 
);