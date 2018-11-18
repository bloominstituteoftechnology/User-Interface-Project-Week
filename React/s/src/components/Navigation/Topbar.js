import React from 'react';


const topbar = function(props) {
  
  return (
  <div className="navContainer__top-bar">
    <h3>S&J</h3>
    <div className="spacer"></div>
    <div className="img-container">
      <img onClick={props.show} src="" alt="navigation hamburger" />
    </div>
  </div>
);

}

export default topbar;
