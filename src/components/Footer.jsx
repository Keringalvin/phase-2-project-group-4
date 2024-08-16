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
          <a href="https://discord.com/invite/3G3syaD" target="_self" rel="noopener noreferrer">
          <i class="fa-brands fa-discord fa-4x"></i>
          </a>
          <a
            href="https://x.com/openbrewerydb"
            target="_self" 
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-x-twitter fa-4x"></i>
          </a>
          <a href="https://github.com/openbrewerydb" target="_self" rel="noopener noreferrer">
            <i className="fa-brands fa-github fa-4x"></i>
          </a>
        </address>
      </div>
    </footer>
  );
}

export default Footer;
