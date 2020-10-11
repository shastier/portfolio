import React from 'react';
import '../App.css';

const Header = props => {
    return(
        <header className="App-header">     
            <div className="slogan">
                <p>"All great achievement starts with <span className="accent">hard work, dedication and purpose."</span></p>
                <img sizes="293px" src={'https://i.imgur.com/os3IIYV.jpg'} alt="Software"/>
            </div>              
            
            <div className="hello">                
                <h2 class="one">Hello, I'm <span className="name">Shirley Hastier</span>, <span className="two">a Software Engineer </span> </h2>
                <h2 class="three">based in Houston, TX</h2>
                <h4 class="four">
                    I'm happy to introduce you my latest works. Click the link below!
                </h4>
                <a className="btn" href="./#work"> See my projects! </a>
            </div>
        </header>
    )
};

export default Header;