import React from 'react';

import NavItems from './NavItems/NavItems';

import Css from './Navigation.css';

const Navigation = (props) => {

    let navClass = Css.Navigation;
    let togglerClass = Css.TogglerHolder;
    if (props.modalState === true) {
        navClass = `${Css.Navigation} ${Css.NavigationOpen}`;
        togglerClass = `${Css.TogglerHolder} ${Css.Active}`;
    }

    return (
    <nav className={navClass}>
        <div className={Css.NavLogo}>S&amp;J</div>
        <NavItems click={props.togglerFunc} />
        <div className={togglerClass} onClick={props.togglerFunc}>
		    <div className={Css.Toggler}></div>
		</div>
    </nav>
    );
}

export default Navigation;