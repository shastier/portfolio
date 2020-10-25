import React from 'react';
import '../App.css';

const Contact = props => {
    return(
        <div className="contact">
            <h1 className="one">Want to know more about me and work together?</h1>
            <h2>Just send a message below and I'll reach out to you ASAP.</h2>
            <form className="contact-form">
                <label>Name: </label>
                <input type="text" name="name" placeholder="Full Name"/>
                <label>E-mail: </label>
                <input type="text" name="email" placeholder="your@email.com"/>
                <label>Message: </label>
                <textarea name="message" placeholder="Here goes your message"/>
                <input type="submit" value="Send" />
            </form>
            <div className="outside-links">
                <a
                    className="App-link"
                    href="https://www.linkedin.com/in/shirley-hastier"
                    rel="Linkedin"
                    target="_blank"
                >
                    <img src="https://i.imgur.com/N630r54.png" alt="LinkedIn" />
                </a>
                <a
                    className="App-link"
                    href="https://github.com/shastier"
                    rel="GitHub"
                    target="_blank"
                >
                    <img src="https://i.imgur.com/gAc4UD4.png" alt="GitHub" />
                </a>
                
                
            </div>
            <span className="footer"> Site by: shastier 2020</span>
        </div>        
    )
};

export default Contact;