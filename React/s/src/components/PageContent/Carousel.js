import React from 'react';

import image1 from "./img/projects/project5.jpeg";
import image2 from "./img/projects/project4.jpeg";
import image3 from "./img/projects/project3.jpeg";
import image4 from "./img/projects/project2.jpeg";
import image5 from "./img/projects/project1.jpeg";


class Carousel extends React.Component {
  constructor(props) {
    super();
      this.state = {
        content: [
          {
            text: 'Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.',
            image: image1
          },
          {
            text: 'Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.',
            image: image2
          },
          {
            text: 'Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.',
            image: image3
          },
          {
            text: 'Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.',
            image: image4
          },
          {
            text: 'Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.',
            image: image5
          },
        ],

        id: 0,

        nextSlide: () => {
          console.log(this.state.id)
          if(this.state.id < this.state.content.length-1) {
            this.setState(prevState => { return {id: this.state.id += 1} })
          } else {
            this.setState(prevState => { return {id: 0} })
          }
        },

        prevSlide: () => {
          console.log(this.state.id)
          if(this.state.id === 0) {
            this.setState(prevState => { return {id: this.state.content.length-1} })
          } else {
            this.setState(prevState => { return {id: this.state.id -= 1} })
          }
        }
      }; //State end
  } //constructor end


  render() {

    return (
      <div className="carousel" data-aos="zoom-in" data-aos-duration="1500">

        <h2>Check Out Our Previous Work Below</h2>

        <div className="carousel__container">
          <div className="next" onClick={this.state.nextSlide.bind(this)}>&#8638;</div>

          <div className="box show" data-tab="1">
            <img src={this.state.content[this.state.id].image} alt="Building Over Looking Water" />
            <div className="box-description">{this.state.content[this.state.id].text}</div>
          </div>

          <div className="prev" onClick={this.state.prevSlide.bind(this)}>&#8643;</div>
        </div>
      </div>
    );
  }
}

export default Carousel;
