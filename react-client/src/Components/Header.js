import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TweenMax } from 'gsap';
import hamburger from '../img/nav-hamburger.png';
import closeBurger from '../img/nav-hamburger-close.png';
class Header extends Component {

    constructor() {
        super();
        this.toggleNav = this.toggleNav.bind(this);
        this.button = React.createRef();
        this.navContent = React.createRef();
    }

    componentDidMount() {
        this.navContent.current.style.display = 'none';
    }

    toggleNav() {
        if(this.navContent.current.style.display == 'none') {
            this.navContent.current.style.display = 'flex';
            this.button.current.src = `${closeBurger}`;
            TweenMax.fromTo(this.navContent.current, .3, {
                opacity: 0
            }, {
                opacity: .9
            });
        } else {
            this.button.current.src = `${hamburger}`;
            TweenMax.fromTo(this.navContent.current, .3, {
                opacity: .9
            }, {
                opacity: 0,
                onComplete: () => {
                    this.navContent.current.style.display = 'none';
                }
            });
        }
    }

  render() {
    return (
        <div>
            <header>
                <h1>S&J</h1>
                <nav>
                    <img onClick={this.toggleNav} class="nav-open" src={ hamburger } alt="Menu Open Button" ref={this.button} />
                </nav>
            </header>
            <div class="nav-content" ref={this.navContent} >
                <Link to="/">Home</Link>
                <Link to="/About-Us">About Us</Link>
                <Link to="/Services">Services</Link>
                <Link to="/Projects">Projects</Link>
                <Link to="/Contact">Contact</Link>
            </div>
        </div>
    );
  }
}

export default Header;