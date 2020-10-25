import React from 'react';
import './App.css';

// import components.
import Navbar from './components/Navbar';
import Header from './components/Header';
import Works from './components/Works';
import About from './components/About';
import Contact from './components/Contact';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      page: 'work',
    };
    this.changePage = this.changePage.bind(this);    
  }

  changePage(page) {
    this.setState({
      page: page,
    });
  }

  renderMainView() {
    switch (this.state.page) {
      case 'work':
        return<Works />        
      case 'about':
        return <About page={this.changePage}/>
      default:
        break;
    }    
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
        <About />
        <Contact />
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
