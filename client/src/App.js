import React from 'react';
import './App.css';

// import components.
import Navbar from './components/Navbar';
import Header from './components/Header';
import Works from './components/Works';
import About from './components/About';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      page: null,
    }    
  }

  renderMainView() {
    return(
      <Works />
    )
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <body className="App-body">
        <div className="App-main-view">
          {this.renderMainView()}
        </div>
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
}

export default App;
