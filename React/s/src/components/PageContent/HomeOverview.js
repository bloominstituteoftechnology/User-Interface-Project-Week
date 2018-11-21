import React from 'react';

import image1 from './img/home/home-img-1.png';
import image2 from './img/home/home-img-2.png';


const homeOverview = props => {
  return (
    <div>
      <section data-aos="slide-right" data-aos-duration="1250">
        <div className="home__overview__content" >
          <h2>Smith & Jones Architects</h2>

          <p>Et sed autem causae appareat, tempor abhorreant te mei, facer facilisis sit ea. Eu timeam vidisse consectetuer sed. Duo etiam
             laboramus dissentiet in, nec no errem</p>

          <button type="button"><a href="about.html">Learn More</a></button>
        </div>
        <div className="home__overview__img">
          <img src={image1} alt="a black pen laying on blueprints" />
        </div>
      </section>

      <section className="reverse" data-aos="slide-left" data-aos-duration="1250">
        <div className="home__overview__content">
          <h2>Futuristic Designs</h2>

          <p>Et sed autem causae appareat, tempor abhorreant te mei, facer facilisis sit ea. Eu timeam vidisse consectetuer sed. Duo etiam
             laboramus dissentiet in, nec no errem</p>

          <button type="button"><a href="projects.html">View Designs</a></button>
        </div>
        <div className="home__overview__img">
          <img src={image2} alt="view of the horizon sky" />
        </div>
      </section>
    </div>
  );
}

export default homeOverview;
