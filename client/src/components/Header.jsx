import React from 'react';
import '../App.css';

const Header = props => {
    return(
        <header className="App-header">       
            <p className="quote">"All great achievement starts with hard work, dedication and purpose."</p>
            <h2> Hello: </h2>        
            <h1>I'm <span className="name">Shirley Hastier</span>, </h1>
            <h1>a Software Engineer </h1>
            <h1>based in Houston, TX</h1>
            <h3>
                I'm happy to introduce to you my latest works. Click the link below!
            </h3>
            <a className="btn" href="./#work"> See my work! </a>
        </header>
    )
};

export default Header;