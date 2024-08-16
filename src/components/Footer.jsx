import React from 'react';
import '../styles/Footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const Footer = () => {
  return (
    <footer>
      <div id="contacts">
        <h3>You may join me</h3>
        <p className="quote">
          ~Take a seat and enjoy an earthy taste~
        </p>
        <address className="social-icons">
          <a href="mailto:mwaimwaniki001@gmail.com" target="_self" rel="noopener noreferrer">
            <i className="fa-solid fa-envelope fa-4x"></i>
          </a>
          <a
            href="https://x.com/i/flow/login?redirect_after_login=%2Fsearch"
            target="_self" 
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-x-twitter fa-4x"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/nathan-mwaniki-a9a28a2a5"
            target="_self" 
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin-in fa-4x"></i>
          </a>
          <a href="https://github.com/Nathan-Mwai" target="_self" rel="noopener noreferrer">
            <i className="fa-brands fa-github fa-4x"></i>
          </a>
          <a href="https://www.freecodecamp.org/NathanMwai" target="_self" rel="noopener noreferrer">
            <i className="fa-brands fa-free-code-camp fa-4x"></i>
          </a>
        </address>
      </div>
    </footer>
  );
}

export default Footer;
