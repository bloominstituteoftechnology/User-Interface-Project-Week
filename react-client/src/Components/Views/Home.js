import React, { Component } from 'react';

//images
import HomeImage1 from '../../img/home/home-img-1.png';
import HomeImage1Mobile from '../../img/home/home-mobile-img-1.png';
import HomeImage2 from '../../img/home/home-img-2.png';
import HomeImage2Mobile from '../../img/home/home-mobile-img-2.png';
import Villas from '../../img/home/home-villas-img.png';
import VillasMobile from '../../img/home/home-mobile-villas-img.png'
import Outskirts from '../../img/home/home-outskirts-img.png'
import OutskirtsMobile from '../../img/home/home-mobile-outskirts-img.png'
import Blocks from '../../img/home/home-the-blocks-img.png'
import BlocksMobile from '../../img/home/home-mobile-the-blocks-img.png'

class Home extends Component {
  render() {
    return (
      <div className="home">
        <section className="jumbotron">
		    <p>
		    	Integrity, <br />
		    	Excellence, <br />
		    	Progress.
		    </p>
	    </section>

        <div className="main-content">
		<section className="heading-content">
			<div className="heading-panel" data-aos="fade-up">
				<div className="panel-text">
					<h3>Smith & Jones Architects</h3>
					<p>Et sed autem causae appareat, tempor abhorreant te 	mei, facer facilisis sit ea. Eu timeam vidisse consectetuer sed. Duo etiam laboramus dissentiet in, nec no errem</p>
					<div className="action-button">
						<a href="#">Learn More</a>
					</div>
					
				</div>
				<div className="panel-image">
					<img className="desktop-image" src={HomeImage1} alt="Sketch" />
					<img className="mobile-image" src={HomeImage1Mobile} alt="Sketch" />
				</div>
			</div>
			<div className="heading-panel" data-aos="fade-up">
				<div className="panel-image">
					<img className="desktop-image"src={HomeImage2}alt="Sketch" />
					<img className="mobile-image" src={HomeImage2Mobile} alt="Sketch" />
				</div>
				<div className="panel-text">
					<h3>Futuristic Designs</h3>
					<p>Et sed autem causae appareat,temporabhorreant te mei, facerfacilisis sit ea.Eu timeam vidisseconsectetuer sed. Duoetiam laboramusdissentiet in, nec noerrem</p>
					<div className="action-button">
						<a href="#">View Designs</a>
					</div>
					</div>
				</div>
		</section>

		<section className="recent-projects">
			<h2 data-aos="fade-up">Recent Projects</h2>
			<div className="project-panel" data-aos="fade-up">
				<img src={Villas} alt="The Villas" className="desktop-image" />
				<img src={VillasMobile} alt="The Villas" className="mobile-image" />
				<h3>THE VILLAS</h3>
				<div className="panel-text">
					<p>The Villas bring to the table win-winsurvival strategies to ensure proactivedomination. At the end of the day, goingforward, a new normal that has evolved fromgeneration X is on the runway heading towardsa streamlined cloud solution. </p>
					<p>Capitalize on low hanging fruit to identifya ballpark value added activity to beta test.Override the digital divide with additionalclickthroughs from DevOps. Nanotechnologyimmersion along the information highway willclose the loop on focusing solely on thebottom line.</p>
				</div>
			</div>

			<div className="project-panel" data-aos="fade-up">
				<img src={Outskirts} alt="Outskirts" className="desktop-image" />
				<img src={OutskirtsMobile} alt="Outskirts" className="mobile-image" />
				<h3>OUTSKIRTS</h3>
				<div className="panel-text">
					<p>The Outskirts are amazing to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. </p>
					<p>Capitalize on low hanging fruit to identifya ballpark value added activity to beta test.Override the digital divide with additionalclickthroughs from DevOps. Nanotechnologyimmersion along the information highway willclose the loop on focusing solely on thebottom line.</p>
				</div>
			</div>

			<div className="project-panel" data-aos="fade-up">
				<img src={Blocks} alt="The Blocks" className="desktop-image" />
				<img src={BlocksMobile} alt="The Blocks" className="mobile-image" />
				<h3>THE BLOCKS</h3>
				<div className="panel-text">
					<p>The Blocks are amazing to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. </p>
					<p>Capitalize on low hanging fruit to identifya ballpark value added activity to beta test.Override the digital divide with additionalclickthroughs from DevOps. Nanotechnologyimmersion along the information highway willclose the loop on focusing solely on thebottom line.</p>
				</div>
			</div>
		</section>
	    </div>
      </div>
    );
  }
}

export default Home;