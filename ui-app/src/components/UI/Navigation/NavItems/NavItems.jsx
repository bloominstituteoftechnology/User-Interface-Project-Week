import React from 'react';

import NavItem from './NavItem/NavItem';

import Css from './NavItems.css';

const NavItems = (props) => (
            <ul className={Css.NavList}>
                <NavItem click={props.click} exact={true} link="/">Home</NavItem>
                <NavItem click={props.click} link="/services">Services</NavItem>
                <NavItem click={props.click} link="/contact">Contact</NavItem>
			</ul>
        )

export default NavItems;