import React from 'react';

import Contact from './Contact';
import HomeOverview from './HomeOverview';
import Projects from './Projects.js';
import ServicesOverview from './ServicesOverview';
import TabNav from './TabNav';

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
    main = <TabNav />;
  } else if (props.page === 'contact') {
    content = undefined;
    contentClass = undefined;
    main = <Contact />
  }

  return(
    <div className={contentClass}>
      {content}
      {main}
    </div>
  );
}

export default pageContent;
