import React from 'react';

import {NavLink} from 'react-router-dom';

import Css from './NavItem.css';

const NavItem = (props) => (
    <li className={Css.NavItem}>
        <NavLink 
            onClick={props.click}
            exact={props.exact} 
            to={props.link}
            activeClassName={Css.NavItemActive}
        >{props.children}</NavLink>
    </li>
)

export default NavItem;