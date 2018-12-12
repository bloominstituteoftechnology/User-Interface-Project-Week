import React, { Component } from 'react';
import { TweenMax } from 'gsap';

//Import images used in slides
import desktopImage1 from '../img/contact/contact-jumbotron.png';
import desktopImage2 from '../img/home/home-jumbotron.png';
import desktopImage3 from '../img/services/services-jumbotron.png';
import mobileImage1 from '../img/contact/contact-mobile-jumbotron.png';
import mobileImage2 from '../img/home/home-mobile-jumbotron.png';
import mobileImage3 from '../img/services/services-mobile-jumbotron.png';
class Carousel extends Component {
    constructor() {
        super();
        //Bind our methods to this Object
        this.moveLeft = this.moveLeft.bind(this);
        this.moveRight = this.moveRight.bind(this);
        this.resizeSource = this.resizeSource.bind(this);
        this.startLoop = this.startLoop.bind(this);
        //Get references to all of our DOM elements
        this.carousel = React.createRef();
        this.leftBtn = React.createRef();
        this.rightBtn = React.createRef();
        this.timer = React.createRef();
        this.text = React.createRef();
        //Get arrays of our images we imported
        this.desktopSlides = [desktopImage1, desktopImage2, desktopImage3];
        this.mobileSlides = [mobileImage1, mobileImage2, mobileImage3];
        this.currentSlide = 0;
        this.animating = false;
    }

    componentDidMount() {
        this.startLoop();
        window.addEventListener('resize', () => this.resizeSource());
    }

    componentWillUnmount() {
        window.removeEventListener('resize', () => this.resizeSource());
    }

    resizeSource() {
        let screenW = window.innerWidth;
        if(screenW > 500) { //If screen size is larger than mobile, set the current image to the desktop version
            this.carousel.current.style.background = `bottom url("${this.desktopSlides[this.currentSlide]}")`;
        } else if(screenW <= 500) { //If screen size is mobile, set the current image to the mobile version
            this.carousel.current.style.background = `bottom / cover url("${this.mobileSlides[this.currentSlide]}")`;
        }
    }

    startLoop() {
        //Animate Timer, when it hits 100% width, we call the carousel to move right one slide.
        TweenMax.fromTo(this.timer.current, 5, {
            width: '0%'
        }, {
            width: '100%',
            onComplete: () => {
                this.moveRight();
            }
        });
    }

    moveRight() {
        if(!this.animating) {
            this.animating = true;
            let screenW = window.innerWidth;
            this.currentSlide += 1;
            if(this.currentSlide > this.desktopSlides.length - 1) {
                this.currentSlide = 0;
            }
            //If screen is larger than mobile, lets do a transition to the next Desktop sized slide
            if(screenW > 500) {
                TweenMax.fromTo(this.text.current, .5, {
                    background: `rgba(0, 0, 0, 0)`
                }, {
                    background: `rgba(0, 0, 0, 1)`,
                    onComplete: () => {
                        this.carousel.current.style.background = `bottom url("${this.desktopSlides[this.currentSlide]}")`;
                        TweenMax.to(this.text.current, .5, {
                            background: `rgba(0, 0, 0, 0)`,
                            onComplete: () => {
                                this.animating = false;
                                this.startLoop();
                            }
                        });
                        TweenMax.to(this.timer.current, .5, {width: '0%'});
                    }
                })
            } else if(screenW <= 500) { //Else, we do a transition to the next Mobile sized slide
                TweenMax.fromTo(this.text.current, .5, {
                    background: `rgba(0, 0, 0, 0)`
                }, {
                    background: `rgba(0, 0, 0, 1)`,
                    onComplete: () => {
                        this.carousel.current.style.background = `bottom / cover url("${this.mobileSlides[this.currentSlide]}")`;
                        TweenMax.to(this.text.current, .5, {
                            background: `rgba(0, 0, 0, 0)`,
                            onComplete: () => {
                                this.animating = false;
                                this.startLoop();
                            }
                        });
                    }
                })
            }
        }
    }

    moveLeft() {
        if(!this.animating) {
            TweenMax.killAll();
            TweenMax.to(this.timer.current, 0.3, {width: '0%'});
            this.animating = true;
            let screenW = window.innerWidth;
            this.currentSlide -= 1;
            if(this.currentSlide < 0) {
                this.currentSlide = this.desktopSlides.length - 1;
            }
            //If screen is larger than mobile, lets do a transition to the next Desktop sized slide
            if(screenW > 500) {
                TweenMax.fromTo(this.text.current, .5, {
                    background: `rgba(0, 0, 0, 0)`
                }, {
                    background: `rgba(0, 0, 0, 1)`,
                    onComplete: () => {
                        this.carousel.current.style.background = `bottom url("${this.desktopSlides[this.currentSlide]}")`;
                        TweenMax.to(this.text.current, .5, {
                            background: `rgba(0, 0, 0, 0)`,
                            onComplete: () => {
                                this.animating = false;
                            }
                        });
                    }
                })
            } else { //Else, we do a transition to the next Mobile sized slide
                TweenMax.fromTo(this.text.current, .5, {
                    background: `rgba(0, 0, 0, 0)`
                }, {
                    background: `rgba(0, 0, 0, 1)`,
                    onComplete: () => {
                        this.carousel.current.style.background = `bottom / cover url("${this.mobileSlides[this.currentSlide]}")`;
                        TweenMax.to(this.text.current, .5, {
                            background: `rgba(0, 0, 0, 0)`,
                            onComplete: () => {
                                this.animating = false;
                                this.startLoop();
                            }
                        });
                    }
                })
            }
        }
        
    }

  render() {
      let carouselStyle = { backgroundSize: 'cover' }
    return (
        <section className="jumbotron carousel" style={carouselStyle} ref={this.carousel} >
			<h1 ref={this.text}>{ this.props.title }</h1>
			<div onClick={this.moveLeft} className="left" ref={this.leftBtn}> {`<`} </div>
			<div onClick={this.moveRight} className="right" ref={this.rightBtn}> {`>`} </div>
			<div className="timer" ref={this.timer}></div>
		</section>
    );
  }
}

export default Carousel;