import React, { Component } from 'react';
import Aox from './../../hoc/Aox';
import './Header.css';

class Header extends Component {

  toggle = (event) => {

  }

  render() {
    return (
      <Aox>
        <header
          className="header">
          <h1>S&J</h1>
          <nav>
            <a href="index.html" className="current">Home</a>
            <a href="services.html">Services</a>
            <a href="contact.html">Contact</a>
          </nav>
          <div
            className="dropdownButton"
            onClick={this.toggle}>
          </div>
        </header>
      </Aox>
    );
  }
}

export default Header;