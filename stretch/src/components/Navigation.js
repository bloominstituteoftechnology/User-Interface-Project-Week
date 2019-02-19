import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return(
        <div>
            <header>
                <h2><a href="index.html" className="logo">S&J</a></h2>
                <nav>
                    <div className="items">
                        <NavLink to="/"><div className='active'>Home</div></NavLink>
                        <NavLink to="/services"><div>Services</div></NavLink>
                        <NavLink to="/contact"><div>Contact</div></NavLink>
                    </div>
                </nav>
                <i className="hamburger fas fa-bars"></i>
            </header>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.2/TweenMax.min.js"></script>
            <script src="../src/components/script.js"></script>
        </div>
    );
}
export default Navigation;



    


