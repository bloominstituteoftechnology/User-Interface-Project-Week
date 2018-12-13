import React from 'react';

import Css from './ServiceCard.css';


const ServiceCard = (props) => {
        return(
            <div className={Css.Main}>
			    <div className={Css.Content}>
                    <h2>{props.title}</h2>
                    <p>Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service withrobust    ideas. Dynamically innovate resource-leveling customer service for state of the art customer service. </p>
			    	<p>Phosfluorescently engage worldwide methodologies with web-enabled technology. Interactively coordinate proactive e-commerce viaprocess-centric   "outside the box" thinking. Completely pursue scalable customer service through sustainable potentialities.</p>
			    </div>
			    <img className={`${Css.Img} ${Css.DesktopOnly}`} src={props.desktop} alt="pre-construction"/>
			    <img className={`${Css.Img} ${Css.MobileOnly}`} src={props.mobile} alt="pre-construction" />
		    </div>
        );
}

export default ServiceCard;