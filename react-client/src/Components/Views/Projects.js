import React, { Component } from 'react';
import Carousel from '../Carousel';
import TabNavigator from '../TabNavigator'

//images
import villas from '../../img/home/home-villas-img.png';
import villasMobile from '../../img/home/home-mobile-villas-img.png';
import outskirts from '../../img/home/home-outskirts-img.png';
import outskirtsMobile from '../../img/home/home-mobile-outskirts-img.png';
import blocks from '../../img/home/home-the-blocks-img.png';
import blocksMobile from '../../img/home/home-mobile-the-blocks-img.png';


class Services extends Component {
  render() {
        let tabs = ['The Villas', 'Outskirts', 'The Blocks'];
    return (
        <div className="projects">
            <Carousel title="Projects" />
            <section className="main-content">
		    	<div className="heading-text">
		    			<p>Projects include: completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.</p>
		    	</div>
                <TabNavigator tabs={tabs}>
		    	    <div className="tab-contents">
		    	    	<div className="tab-content" data-tab="1">
		    	    		<div className="content">
                                <div className="content-header">
                                    <img src={villas} alt="The Villas" className="desktop-image" />
                                    <img src={villasMobile} alt="The Villas" className="mobile-image" />
                                    <h3>THE VILLAS</h3>
                                </div>
		    	    		    <div className="text">
		    	    		    	<p>Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.
                                    Phosfluorescently engage worldwide methodologies with web-enabled technology. Interactively coordinate proactive e-commerce via process-centric "outside the box" thinking. Completely pursue scalable customer service through sustainable potentialities.</p>
                                    <p>Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.
		    	    		    	Phosfluorescently engage worldwide methodologies with web-enabled technology. Interactively coordinate proactive e-commerce via process-centric "outside the box" thinking. Completely pursue scalable customer service through sustainable potentialities.</p>
		    	    		    </div>
		    	    		</div>
		    	    		</div>

		    	    <div className="tab-content" data-tab="2">
		    	    	<div className="content">
                                <div className="content-header">
                                    <img src={outskirts} alt="Outskirts" className="desktop-image" />
                                    <img src={outskirtsMobile} alt="Outskirts" className="mobile-image" />
                                    <h3>OUTSKIRTS</h3>
                                </div>
		    	    		    <div className="text">
		    	    		    	<p>Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.
                                    Phosfluorescently engage worldwide methodologies with web-enabled technology. Interactively coordinate proactive e-commerce via process-centric "outside the box" thinking. Completely pursue scalable customer service through sustainable potentialities.</p>
                                    <p>Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.
		    	    		    	Phosfluorescently engage worldwide methodologies with web-enabled technology. Interactively coordinate proactive e-commerce via process-centric "outside the box" thinking. Completely pursue scalable customer service through sustainable potentialities.</p>
		    	    		    </div>
		    	    		</div>
		    	    </div>

		    	    <div className="tab-content" data-tab="3">
		    	    	<div className="content">
                                <div className="content-header">
                                    <img src={blocks} alt="The Blocks" className="desktop-image" />
                                    <img src={blocksMobile} alt="The Blocks" className="mobile-image" />
                                    <h3>THE BLOCKS</h3>
                                </div>
		    	    		    <div className="text">
		    	    		    	<p>Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.
                                    Phosfluorescently engage worldwide methodologies with web-enabled technology. Interactively coordinate proactive e-commerce via process-centric "outside the box" thinking. Completely pursue scalable customer service through sustainable potentialities.</p>
                                    <p>Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.
		    	    		    	Phosfluorescently engage worldwide methodologies with web-enabled technology. Interactively coordinate proactive e-commerce via process-centric "outside the box" thinking. Completely pursue scalable customer service through sustainable potentialities.</p>
		    	    		    </div>
		    	    		</div>
		    	    </div>
		    	</div>
            </TabNavigator>
		    </section>
        </div>
    
    );
  }
}

export default Services;