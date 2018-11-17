import React from 'react';
import './Header.css';

const header = (props) => {
  return (
    <header className="header">
      <h1>S&J</h1>
      <nav>
        <a href="index.html" class="current">Home</a>
        <a href="services.html">Services</a>
        <a href="contact.html">Contact</a>
      </nav>
      <div className="dropdownButton"></div>
    </header>
  );
};

export default header;