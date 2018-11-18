import React from 'react';

const menu = props => {

  let menuClass = "menu";
  let styles;

  if(props.show) {
    menuClass = "menu open"
  } else {
    menuClass = "menu close"
  }

  return (
    <div className={menuClass}>
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
