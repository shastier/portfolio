INSERT INTO categories (title) VALUES ('JavaScript');
INSERT INTO categories (title) VALUES ('Express.js');
INSERT INTO categories (title) VALUES ('React');
INSERT INTO categories (title) VALUES ('Ruby on Rails');

INSERT INTO projects (name, description, deploy_url, github_url, date, category_id) VALUES ('Game Dots and Boxes', 'Dots and Boxes is a pencil and paper game for two players. It was first published in the 19th century by French mathematician Edouard Lucas.', 'https://shastier.github.io/Project-1-Game-Dots-and-Boxes/', 'https://github.com/shastier/Project-1-Game-Dots-and-Boxes', '2020-07-26', 1);
INSERT INTO projects (name, description, deploy_url, github_url, date, category_id) VALUES ('Shopping List App', '"Shopping List App!" is an application software intended to be used by a household on a regular basis to track any new item that needs to be restocked in the house, specifically grocery. Traditionally this task has been accomplished using paper and pencil, but it is inefficient and time consuming. Instead, using the "Shopping List App" by the time the household has to go to the store, the shopping list will be already completed and accessible.', 'https://protected-castle-59971.herokuapp.com/', 'https://github.com/shastier/Project-2-ShoppingListApp', '2020-08-17', 2);
INSERT INTO projects (name, description, deploy_url, github_url, date, is_collaborative, category_id) VALUES ('Thrift-fit', 'This app is for people to find thrifted outfits that have been curated by various different individuals. The users can explore a large selection of outfits purchasing the ones that they like and following curators who best match their styles and tastes.', 'https://vast-meadow-68893.herokuapp.com/', 'https://github.com/shastier/thrift-fit-app', '2020-09-04', 'true', 3);
INSERT INTO projects (name, description, deploy_url, github_url, date, category_id) VALUES ('Grocery API', 'Grocery app is an easy to use REST API that you can use as backend to implement a grocery app. All you will have to do is just implement the front end with the thecnology of your choice such as React. It already include a seed file with pictures for that specific product', 'https://shielded-retreat-96681.herokuapp.com/', 'https://github.com/shastier/grocery_app', '2020-09-22', 4);
INSERT INTO projects (name, description, deploy_url, github_url, date, category_id) VALUES ('Home Budget Friend App', 'Home budgeting process is complicated, yet an important aspect of wellbeing and success. The aim of "Home Budget Friend" is to easy the home budgeting pain and make of it an enjoyable experience.', 'https://lit-anchorage-53218.herokuapp.com/', 'https://github.com/shastier/home_budget_friend', '2020-09-28', 4);

INSERT INTO project_images (description, img_url, project_id) VALUES ('Player 1 winning scenario', 'https://i.imgur.com/RYexLDx.jpg', 1);
INSERT INTO project_images (description, img_url, project_id) VALUES ('Home Page', 'https://i.imgur.com/ffIHZTL.jpg', 2);
INSERT INTO project_images (description, img_url, project_id) VALUES ('Shopping Cart', 'https://i.imgur.com/egOsdt9.jpg', 3);
INSERT INTO project_images (description, img_url, project_id) VALUES ('API Products View', 'https://i.imgur.com/iL0Yn07.png', 4);
INSERT INTO project_images (description, img_url, project_id) VALUES ('Add New Expense', 'https://i.imgur.com/coHGRot.jpg', 5);

INSERT INTO skills (type) VALUES ('Languages');
INSERT INTO skills (type) VALUES ('Databases');
INSERT INTO skills (type) VALUES ('Libraries / Frameworks');
INSERT INTO skills (type) VALUES ('Tools / Technologies');
INSERT INTO skills (type) VALUES ('Methodologies');
INSERT INTO skills (type) VALUES ('User Experience');

INSERT INTO technologies (title, skill_id) VALUES ('JavaScript', 1);
INSERT INTO technologies (title, skill_id) VALUES ('Ruby', 1);
INSERT INTO technologies (title, skill_id) VALUES ('Java', 1);
INSERT INTO technologies (title, skill_id) VALUES ('C#', 1);
INSERT INTO technologies (title, skill_id) VALUES ('C++', 1);
INSERT INTO technologies (title, skill_id) VALUES ('Python', 1);
INSERT INTO technologies (title, skill_id) VALUES ('SQL', 1);
INSERT INTO technologies (title, skill_id) VALUES ('TypeScript', 1);

INSERT INTO technologies (title, skill_id) VALUES ('PostgreSQL', 2);
INSERT INTO technologies (title, skill_id) VALUES ('Oracle Database', 2);
INSERT INTO technologies (title, skill_id) VALUES ('MySQL', 2);
INSERT INTO technologies (title, skill_id) VALUES ('Microsoft SQL Server', 2);
INSERT INTO technologies (title, skill_id) VALUES ('MongoDB', 2);
INSERT INTO technologies (title, skill_id) VALUES ('Amazon SimpleDB', 2);

INSERT INTO technologies (title, skill_id) VALUES ('npm', 3);
INSERT INTO technologies (title, skill_id) VALUES ('Yarn', 3);
INSERT INTO technologies (title, skill_id) VALUES ('Mocha', 3);
INSERT INTO technologies (title, skill_id) VALUES ('Chai.js', 3);
INSERT INTO technologies (title, skill_id) VALUES ('jQuery', 3);
INSERT INTO technologies (title, skill_id) VALUES ('Ruby on Rails', 3);
INSERT INTO technologies (title, skill_id) VALUES ('React JS', 3);
INSERT INTO technologies (title, skill_id) VALUES ('Express JS', 3);
INSERT INTO technologies (title, skill_id) VALUES ('Sinatra', 3);
INSERT INTO technologies (title, skill_id) VALUES ('ActiveRecord', 3);
INSERT INTO technologies (title, skill_id) VALUES ('Bootstrap', 3);

INSERT INTO technologies (title, skill_id) VALUES ('GitHub', 4);
INSERT INTO technologies (title, skill_id) VALUES ('Git', 4);
INSERT INTO technologies (title, skill_id) VALUES ('HTML5', 4);
INSERT INTO technologies (title, skill_id) VALUES ('CSS3', 4);
INSERT INTO technologies (title, skill_id) VALUES ('AJAX', 4);
INSERT INTO technologies (title, skill_id) VALUES ('DOM', 4);
INSERT INTO technologies (title, skill_id) VALUES ('Heroku', 4);
INSERT INTO technologies (title, skill_id) VALUES ('CLI', 4);
INSERT INTO technologies (title, skill_id) VALUES ('JSON', 4);
INSERT INTO technologies (title, skill_id) VALUES ('Node.js', 4);
INSERT INTO technologies (title, skill_id) VALUES ('Embedded JavaScript (EJS)', 4);
INSERT INTO technologies (title, skill_id) VALUES ('Object-Relational Mapping (ORM)', 4);

INSERT INTO technologies (title, skill_id) VALUES ('REST', 5);
INSERT INTO technologies (title, skill_id) VALUES ('MVC', 5);
INSERT INTO technologies (title, skill_id) VALUES ('OOP', 5);
INSERT INTO technologies (title, skill_id) VALUES ('Agile', 5);

INSERT INTO technologies (title, skill_id) VALUES ('Responsive Web Design', 6);
INSERT INTO technologies (title, skill_id) VALUES ('Wireframing', 6);
INSERT INTO technologies (title, skill_id) VALUES ('Search Engine Optimization', 6);
INSERT INTO technologies (title, skill_id) VALUES ('UX/UI Design', 6);