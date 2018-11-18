import React from 'react';
let menuClass = "menu";
let styles;

const menu = props => {
  function setZBack() {
    const menu = document.querySelector('.menu');
    if(menu == undefined) {
      return
    } else {
      menu.style.zIndex = -1000;
        console.log(menu);
    }
  }

  function setZTop() {
    const menu = document.querySelector('.menu');
    if(menu == undefined) {
      return
    } else {
      menu.style.zIndex = 1000;
        console.log(menu);
    }
  }

  if(props.show) {
    menuClass = "menu open"
    const zChange = setTimeout(setZTop, 0)
  } else {
    menuClass = "menu close"
    const zChange = setTimeout(setZBack, 300)
  }

  return (
    <div className={menuClass} style={styles}>
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
