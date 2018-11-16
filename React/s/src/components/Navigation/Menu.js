import React from 'react';

const menu = props => {

  let openMenu = "menu";

  if(props.show) {
    openMenu = "menu open"
  }

  return (
    <div className={openMenu}>
      <div className="menu__links">
        <a href="#">Home</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
        <a href="#">About Us</a>
        <a href="#">Projects</a>
      </div>
    </div>
  );
};

export default menu;
