import React from 'react';
import HomeOverview from './HomeOverview';
import Projects from './Projects.js';
import ServicesOverview from './ServicesOverview';

const pageContent = (props) => {
  let content;
  let contentClass;
  let main;


  if(props.page === 'home') {
    content = <HomeOverview />;
    contentClass = "home__overview";
    main = <Projects />;
  } else if (props.page === 'services') {
    content = <ServicesOverview />;
    contentClass = "servicesContainer";
  }

  return(
    <div className={contentClass} >
      {content}
      {main}
    </div>
  );
}

export default pageContent;
