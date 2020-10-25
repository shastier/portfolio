import React from 'react';
import '../App.css';

const Navbar = props => {
    return(
        <nav className="navbar">                
            <li><a href="./">Home</a></li>
            <li><a href="./#about">About Me</a></li>
            <li><a href="./#work" className="active">Projects</a></li>
            <li><a href="./#contact">Contact</a></li>
        </nav>        
    )
};

export default Navbar;