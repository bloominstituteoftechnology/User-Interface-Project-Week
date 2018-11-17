import React from 'react';

import ProjectCard from './ProjectCard';

const projects = props => {
  const projectArr = [
    {
      title: 'THE VILLAS',
      id: 'villas',
      description: [
        'The Villas bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.',
        'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.'
      ]
    },

    {
      title: 'OUTSKIRTS',
      id: 'outskirts',
      description: [
        'The Outskirts are amazing to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.',
        'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with	additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line'
      ]
    },

    {
      title: 'THE BLOCKS',
      id: 'blocks',
      description: [
        'The Blocks are amazing to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.',
        'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.'
      ]
    }
  ];


  return(
    <div>
      <h2 className="content-block-2">Recent Projects</h2>
      <ProjectCard title={projectArr[0].title} id={projectArr[0].id} text={projectArr[0].description} />
      <ProjectCard title={projectArr[1].title} id={projectArr[1].id} text={projectArr[1].description} />
      <ProjectCard title={projectArr[2].title} id={projectArr[2].id} text={projectArr[2].description} />
    </div>
  );
}

export default projects;
