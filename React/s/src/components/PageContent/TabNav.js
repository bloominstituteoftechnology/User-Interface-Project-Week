import React from 'react';
import image1 from './img/services/services-tab-pre-construction-img.png';
import image2 from './img/services/services-tab-construction-img.png'
import image3 from "./img/services/services-tab-design-build-img.png";
import image4 from "./img/services/services-tab-sustainability-img.png"

import TabCard from "./TabCard.js";

class TabNav extends React.Component {
  constructor(props) {
    super();
      this.state = {
          title: 'Pre-Construction',
          text: [
            'Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.',
            'Phosfluorescently engage worldwide methodologies with web-enabled technology. Interactively coordinate proactive e-commerce via process-centric "outside the box" thinking. Completely pursue scalable customer service through sustainable potentialities.'
          ],
          image: image1,

          changeTab: function(event) {
            const label = event.target.innerText;
            let newImg;

            if(label === 'Pre-Construction') {
              newImg = image1;
            } else if(label === 'Construction') {
              newImg = image2;
            } else if(label === 'Design Build') {
              newImg = image3;
            } else {
              newImg =image4;
            }

            this.setState(prevState => { return {title: label, image: newImg} })
          }
        };
  }


  render() {

    return(
      <div>
        <div className="tabNav__tabs">
    			<button type="button" data-tab="1" onClick={this.state.changeTab.bind(this)}>Pre-Construction</button>
    			<button type="button" data-tab="2" onClick={this.state.changeTab.bind(this)}>Construction</button>
    			<button type="button" data-tab="3" onClick={this.state.changeTab.bind(this)}>Design Build</button>
    			<button type="button" data-tab="4" onClick={this.state.changeTab.bind(this)}>Sustainability</button>
    		</div>

    		<TabCard title={this.state.title} text={this.state.text} image={this.state.image} show={this.state.show}/>
      </div>
    );
  }
}




export default TabNav
