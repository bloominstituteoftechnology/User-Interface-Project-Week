import React from 'react';
import Aox from './../../hoc/Aox';
import './Villas.css';

const villas = (props) => (
  <Aox>
    <section className="villas">
      <h3 className="recent">Recent Projects</h3>
      <div className="img"></div>
      <div className="titleBox">
        <h3 className="title">the villas</h3>
      </div>
      <p>
        The Villas bring to the table win-win survival strategies to ensure proactive domination.
				At the end of the day, going forward, a new normal that has evolved from generation X is on
				the runway heading towards a streamlined cloud solution.
			</p>
      <p>
        Capitalize on low hanging fruit to identify a ballpark value added activity to beta test.
				Override the digital divide with additional clickthroughs from DevOps. Nanotechnology
				immersion along the information highway will close the loop on focusing solely on the bottom line.
			</p>
    </section>
  </Aox>
);

export default villas;