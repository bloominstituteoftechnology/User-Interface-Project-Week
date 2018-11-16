import React from 'react';

class Menu extends React.Component {
  render() {
    return (
      <div class="menu open">
				<div class="menu__links">
					<a href="#">Home</a>
					<a href="#">Services</a>
					<a href="#">Contact</a>
					<a href="#">About Us</a>
					<a href="#">Projects</a>
				</div>
		  </div>
    );
  }
}

export default Menu;
