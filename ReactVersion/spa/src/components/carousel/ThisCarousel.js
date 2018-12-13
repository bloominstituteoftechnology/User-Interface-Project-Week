import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

class ThisCarousel extends React.Component {
    render() {
        return (
        <Carousel showStatus={false} showIndicators={true} showThumbs={false} infiniteLoop={true} autoPlay={true} interval={6000}>
            <div>
            <img src={require("../../img/carousel/apartment.jpg")} />
                </div>
                <div>
                    <img src={require("../../img/carousel/againstsky.jpg")} />
                </div>
                <div>
                    <img src={require("../../img/carousel/symmetry.jpg")} />
                </div>
                <div>
                    <img src={require("../../img/home/home-jumbotron.png")} />
                </div>
          </Carousel>
        );
    }
};

export default ThisCarousel;