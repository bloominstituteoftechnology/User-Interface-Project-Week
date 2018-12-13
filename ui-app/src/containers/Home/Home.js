import React, { Component } from 'react';
import Header from '../../shared/Header/Header';
import HeaderImg from '../../img/home/home-jumbotron.png';
import HeaderImgMobile from '../../img/home/home-mobile-jumbotron.png';
import Card from '../../components/Home/Card/Card';
import Project from '../../components/Home/Project/Project';

import Img1 from "../../img/home/home-img-1.png";
import Img1Mobile from "../../img/home/home-mobile-img-1.png";
import Img2 from "../../img/home/home-img-2.png";
import Img2Mobile from "../../img/home/home-mobile-img-2.png";

import VillasImg from '../../img/home/home-villas-img.png';
import VillasImgMobile from '../../img/home//home-mobile-villas-img.png';
import OutskirtsImg from "../../img/home/home-outskirts-img.png";
import OutSkirtsImgMobile from "../../img/home/home-mobile-outskirts-img.png";
import BlocksImg from "../../img/home/home-the-blocks-img.png";
import BlocksImgMobile from "../../img/home/home-mobile-the-blocks-img.png";


import Css from './Home.css';

const textObjects = {
    villas: {
        paragraph1: "The Villas bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a nenormal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. ",
        paragraph2: "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additionaclickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on th bottom line."
    },
    outskirts: {
        paragraph1: "The Outskirts are amazing to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. ",
        paragraph2: "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line."

    },
    blocks: {
        paragraph1: "The Blocks are amazing to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. ",
        paragraph2: "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line."

    }
}

class Home extends Component {

    render(){
        const paragraph = '';
        const heading = <h2>Integrity, <br/> Excellence, <br/> Progress.</h2>
        const header = <Header 
                            paragraph={paragraph} 
                            heading={heading} 
                            src={HeaderImg}
                            height="549px"
                            srcMobile={HeaderImgMobile} 
                            alt="Header Img" />
        return(
            <div className={Css.Container}>
                {header}
                <main>
                    <Card imgDesktop={Img1} imgMobile={Img1Mobile} heading={<h1>Smith &amp; Jones Architects</h1>}/>
                    <Card imgDesktop={Img2} imgMobile={Img2Mobile} heading={<h2>Futuristic Designs</h2>} reverse={true} />
                    <section className={`${Css.MainRow} ${Css.RecentProjects}`}>
			            <h2>Recent Projects</h2>
                        <Project 
                            paragraph1={textObjects.villas.paragraph1}
                            paragraph2={textObjects.villas.paragraph2}
                            mobile={VillasImgMobile}
                            desktop={VillasImg}
                            overlay="THE VILLAS"
                        />
                        <Project 
                            paragraph1={textObjects.outskirts.paragraph1}
                            paragraph2={textObjects.outskirts.paragraph2}
                            mobile={OutSkirtsImgMobile}
                            desktop={OutskirtsImg}
                            overlay="OUTSKIRTS"
                        />
                        <Project 
                            paragraph1={textObjects.villas.paragraph1}
                            paragraph2={textObjects.villas.paragraph2}
                            mobile={BlocksImgMobile}
                            desktop={BlocksImg}
                            overlay="THE BLOCKS"
                        />
		            </section>
                </main>
            </div>
        );
    }
}

export default Home;