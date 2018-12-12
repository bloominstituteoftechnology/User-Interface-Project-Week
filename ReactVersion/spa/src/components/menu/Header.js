import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Header extends React.Component {
    render () {
        return (
            <div>
            <div className="header">
                <h1>S&J</h1>
                    <img className="menu-button" onClick={openMenu} src={require("../../img/nav-hamburger.png")} />
            </div>
        <div className="menu">
      <div className="menutop">
          <h1>S&J</h1>
          <img className="close-button" onClick={closeMenu} src={require("../../img/nav-hamburger-close.png")} />
      </div>
      <ul>
      <Link to="/">
        <li><a>Home</a></li>
        </Link>
        <Link to="/services">
        <li><a href="services.html">Services</a></li>
        </Link>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
    </div>
        )
    }
}

export default Header;

const MainMenu = () => {
    return (
      <div>
        <Link to="/">
          <button>home</button>
        </Link>
        <Link to="/services">
          <button>About</button>
        </Link>
        <Link to="/code">
          <button>code</button>
        </Link>
        <Link to="/contact">
          <button>contact</button>
        </Link>
        <Link to="/info">
          <button>info</button>
        </Link>
      </div>
    );
  };



function openMenu() {
    let menu = document.querySelector(".menu");
    let menuButton = document.querySelector(".menu-button");
    menu.style.display = "block"
    menuButton.style.display = "none";
  }
  
function closeMenu() {
    let menu = document.querySelector(".menu");
    let menuButton = document.querySelector(".menu-button");
    menu.style.display = "none"
    menuButton.style.display = "block";
  }