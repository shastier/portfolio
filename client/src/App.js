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
        </body>
        <footer id="contact">
          <Contact />          
        </footer>
      </div>
    );
  }
}

export default App;
