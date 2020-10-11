import React from 'react';
import '../App.css';

const Works = props => {
    return(
        <div className="works" id="work">
            <nav className="navbar">                
                <li><a href="./#root">Home</a></li>
                <li><a href="#">About Me</a></li>
                <li><a href="./#work">Projects</a></li>
                <li><a href="#">Contact</a></li>
            </nav>
            <p>"Here is my work"</p>
        </div>
    )
};

export default Works;