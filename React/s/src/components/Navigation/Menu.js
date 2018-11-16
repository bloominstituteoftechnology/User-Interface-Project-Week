import React from 'react';

const menu = props => {

  let openMenu = "menu";

  if(props.show) {
    openMenu = "menu open"
  }
    console.log(props)
  return (
    <div className={openMenu}>
      <div className="menu__links">
        <a href="#" onClick={props.toggle}>Home</a>
        <a href="#" onClick={props.toggle}>Services</a>
        <a href="#" onClick={props.toggle}>Contact</a>
        <a href="#" onClick={props.toggle}>About Us</a>
        <a href="#" onClick={props.toggle}>Projects</a>
      </div>
    </div>
  );
};

export default menu;
