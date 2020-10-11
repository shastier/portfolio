import React from 'react';
import './App.css';

// import components.
import Header from './components/Header';
import Works from './components/Works';


function App() {
  return (
    <div className="App">
      <Header />
      <body className="App-body">
        <Works />      
      </body>
      <footer>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/shirley-hastier"
          rel="Linkedin"
          target="_blank"
        >
          Linkedin
        </a>
        <a
          className="App-link"
          href="https://github.com/shastier"
          rel="GitHub"
          target="_blank"
        >
          GitHub
        </a>
      </footer>
    </div>
  );
}

export default App;
