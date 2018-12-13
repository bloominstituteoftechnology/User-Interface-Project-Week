import React, { Component } from 'react';
import Header from '../../shared/Header/Header';
import HeaderImg from '../../img/services/services-jumbotron.png';
import HeaderImgMobile from '../../img/services/services-mobile-jumbotron.png';

import ServiceCard from '../../components/Services/ServiceCard/ServiceCard';
import ServiceButton from '../../components/Services/ServiceButton/ServiceButton';

import preConstrucImg from "../../img/services/services-tab-pre-construction-img.png";
import preConstrucImgMobile from "../../img/services/services-tab-mobile-pre-construction-img.png";
import ConstrucImg from "../../img/services/services-tab-construction-img.png";
import ConstrucImgMobile from "../../img/services/services-tab-mobile-construction-img.png";
import DesignImg from "../../img/services/services-tab-design-build-img.png";
import DesignImgMobile from "../../img/services/services-tab-mobile-design-build-img.png";
import Sustain from "../../img/services/services-tab-sustainability-img.png";
import SustainMobile from "../../img/services/services-tab-mobile-sustainability-img.png";

import Css from './Services.css';


const services = [
    { title: "Pre-Construction", image: preConstrucImg, imageMobile: preConstrucImgMobile },
    { title: 'Construction', image: ConstrucImg, imageMobile: ConstrucImgMobile },
    { title:"Design Build", image: DesignImg, imageMobile: DesignImgMobile },
    { title: "Sustainability", image: Sustain, imageMobile: SustainMobile }
]

class Services extends Component {
    state = {
        serviceCard: 0
    }

    changeServiceTabHandler = (nextIndex) => {
        this.setState({serviceCard: nextIndex})
    }

    render(){
        
        const paragraph = 'Services include: completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.';
        const heading = <h1>Services</h1>
        const header = <Header 
                            paragraph={paragraph} 
                            heading={heading} 
                            src={HeaderImg}
                            srcMobile={HeaderImgMobile} 
                            height="200px"
                            alt="Header Img" />

        let showService = <ServiceCard 
                            title={services[this.state.serviceCard].title} 
                            desktop={services[this.state.serviceCard].image} 
                            mobile={services[this.state.serviceCard].imageMobile}      
                        />   
        let buttons = services.map((service, index) => (
            <ServiceButton 
                key={service.title} 
                serviceToggler={() => this.changeServiceTabHandler(index)} 
                active={index === this.state.serviceCard}
            >{service.title}</ServiceButton>
        ))
        
        return(
            <div className={Css.Container}>
                {header}
                <main className={Css.ServicesSection}>
			        <div className={Css.TabsHolder}>
			        	{buttons}
			        </div>
                    {showService}
                </main>
            </div>
        )
    }
}

export default Services;