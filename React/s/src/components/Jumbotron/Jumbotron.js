import React from 'react';

const jumbotron = props => {

  const jumboHeaders = {
    home: <h1>Integrity, <br /> Excellence, <br /> Progress.</h1>,
  }

  let head;

  if(props.size === 'large') {
    head = jumboHeaders.home;
  }


  return (
    <header>
			<div className="home__jumbotron">
        {head}
			</div>
		</header>
  );
};

export default jumbotron;
