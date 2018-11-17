import React from 'react';

const jumbotron = props => {

  const jumboHeaders = {
    home: {
      title: <h1>Integrity, <br /> Excellence, <br /> Progress.</h1>,
      class: "home__jumbotron"
    },

    services: {
      title: <h1>Services</h1>,
      class: "services"
    },

    contact: {
      title: <h1>Contact Us</h1>,
      class: "contact"
    }
  }

  let head;
  let classCurr;

  if(props.page === 'home') {
    head = jumboHeaders.home.title
    classCurr = jumboHeaders.home.class
  } else if (props.page === 'services') {
    head = jumboHeaders.services.title
    classCurr = jumboHeaders.services.class
  } else {
    head = jumboHeaders.contact.title
    classCurr = jumboHeaders.contact.class
  }


  return (
    <header>
			<div className={ classCurr }>
        {head}
			</div>
		</header>
  );
};

export default jumbotron;
