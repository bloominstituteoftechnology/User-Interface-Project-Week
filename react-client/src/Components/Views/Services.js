import React, { Component } from 'react';
import Carousel from '../Carousel';
import TabNavigator from '../TabNavigator'

//images
import preDesign from '../../img/services/services-tab-pre-construction-img.png';

class Services extends Component {
  render() {
        let tabs = ['Pre-Construction', 'Construction', 'Design Build', 'Sustainability'];
    return (
        <div className="services">
            <Carousel title="Services" />
            <section className="main-content">
			<div className="heading-text">
					<p>Services include: completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.</p>
			</div>

			<TabNavigator tabs={tabs}>
			    <div className="tab-contents">
			    	<div className="tab-content" data-tab="1">
			    		<h2>Pre-Construction</h2>
			    		<div className="content">
			    			<div className="text">
			    				<p>Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.</p>
			    				<p>Phosfluorescently engage worldwide methodologies with web-enabled technology. Interactively coordinate proactive e-commerce via process-centric "outside the box" thinking. Completely pursue scalable customer service through sustainable potentialities.</p>
			    			</div>
			    			<div className="image">
			    				<img src="./img/services/services-tab-pre-construction-img.png" alt="Construction" className="desktop-image" />
			    				<img src="./img/services/services-tab-mobile-pre-construction-img.png" alt="Construction" className="mobile-image" />
			    			</div>
			    		</div>
			    	</div>
			    	<div className="tab-content" data-tab="2">
			    		<h2>Construction</h2>
			    		<div className="content">
			    			<div className="text">
			    				<p>Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.</p>
			    				<p>Phosfluorescently engage worldwide methodologies with web-enabled technology. Interactively coordinate proactive e-commerce via process-centric "outside the box" thinking. Completely pursue scalable customer service through sustainable potentialities.</p>
			    			</div>
			    			<div className="image">
			    				<img src="./img/services/services-tab-construction-img.png" alt="Construction" className="desktop-image" />
			    				<img src="./img/services/services-tab-mobile-construction-img.png" alt="Construction" className="mobile-image" />
			    			</div>
			    		</div>
			    	</div>
			    	<div className="tab-content" data-tab="3">
			    		<h2>Design Build</h2>
			    		<div className="content">
			    			<div className="text">
			    				<p>Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.</p>
			    				<p>Phosfluorescently engage worldwide methodologies with web-enabled technology. Interactively coordinate proactive e-commerce via process-centric "outside the box" thinking. Completely pursue scalable customer service through sustainable potentialities.</p>
			    			</div>
			    			<div className="image">
			    				<img src="./img/services/services-tab-design-build-img.png" alt="Construction" className="desktop-image" />
			    				<img src="./img/services/services-tab-mobile-design-build-img.png" alt="Construction" className="mobile-image" />
			    			</div>
			    		</div>
			    	</div>

			    	<div className="tab-content" data-tab="4">
			    		<h2>Sustainability</h2>
			    		<div className="content">
			    			<div className="text">
			    				<p>Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.</p>
			    				<p>Phosfluorescently engage worldwide methodologies with web-enabled technology. Interactively coordinate proactive e-commerce via process-centric "outside the box" thinking. Completely pursue scalable customer service through sustainable potentialities.</p>
			    			</div>
			    			<div className="image">
			    				<img src="./img/services/services-tab-sustainability-img.png" alt="Construction" className="desktop-image" />
			    				<img src="./img/services/services-tab-mobile-sustainability-img.png" alt="Construction" className="mobile-image" />
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