// Import all the dependencies
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

// Initialize the app and set up dotenv
const app = express();
require('dotenv').config();

// Set up the middleware
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));

// Have the app listen on port 3001
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to my portfolio!');
});

const projectsRoutes = require('./routes/projects-routes');
app.use('/api/portfolio/projects', projectsRoutes);

// const contactRoutes = require('./routes/contact-routes');
// app.use('/api/contact', contactRoutes);

// Error handlers
app.use('*', (req, res) => {
    res.status(400).json({
      message: 'Not found!',
    });
  });
  
app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({
      error: err,
      message: err.message,
    });
});