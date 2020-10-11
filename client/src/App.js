import React from 'react';
import './App.css';

// import components.
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <Header />
      <body className="App-body">
      <h1 className="App-work" id="work">
        Here is my work!
      </h1>
      </body>
      <footer>
      <a
          className="App-link"
          href="https://www.linkedin.com/in/shirley-hastier"
          rel="Linkedin"
        >
          Linkedin
      </a>
        <a
          className="App-link"
          href="https://github.com/shastier"
          rel="GitHub"
        >
          GitHub
        </a>
      </footer>
    </div>
  );
}

export default App;
