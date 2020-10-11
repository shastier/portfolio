import React from 'react';
import '../App.css';

const Navbar = props => {
    return(
        <nav className="navbar">                
            <li><a href="./#root">Home</a></li>
            <li><a href="#">About Me</a></li>
            <li><a href="./#work" className="active">Projects</a></li>
            <li><a href="#">Contact</a></li>
        </nav>        
    )
};

export default Navbar;