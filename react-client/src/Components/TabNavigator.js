import React, { Component } from 'react';
import TweenMax from 'gsap';

class TabNavigator extends Component {
    constructor() {
        super();
        this.tabs = [];
        this.element = null;
        this.currentTab = 2;
        this.animating = false;
    }

    componentWillMount() {
        this.tabs = this.props.tabs;
        //this.element = document.querySelector('.TabNavigation');
    }

    componentDidMount() {
        this.element = document.querySelector('.TabNavigation');
        this.tabs.forEach((t, i) => {
            this.refs['tabButton' + i].addEventListener('click', () => this.selectTab(i));
        });
        let selectedButton = document.querySelector(`.tab-navigator[data-tab="${this.currentTab}"]`);
        let selectedContent = document.querySelector(`.tab-content[data-tab="${this.currentTab}"]`);
        selectedButton.classList.add('selected');
        selectedContent.style.display = 'block';
    }

    selectTab(i) {
        if(!this.animating){
            this.animating = true;
            let tabIndex = i + 1;
            let exitingButton = document.querySelector(`.tab-navigator[data-tab="${this.currentTab}"]`);
            let selectedButton = document.querySelector(`.tab-navigator[data-tab="${tabIndex}"]`);
            let exitingContent = document.querySelector(`.tab-content[data-tab="${this.currentTab}"]`);
            let selectedContent = document.querySelector(`.tab-content[data-tab="${tabIndex}"]`);
            //Animate the exiting content fading out, and after the animation is done, animate new content fading in
            TweenMax.fromTo(exitingContent, .15, {opacity: 1}, {
                opacity: 0,
                onComplete: () => {
                    exitingContent.style.display = 'none';
                    exitingButton.classList.remove('selected');
                    selectedButton.classList.add('selected');
                    selectedContent.style.display = 'block';
                    TweenMax.fromTo(selectedContent, .15, {opacity: 0}, {
                        opacity: 1,
                        onComplete: () => {
                            this.currentTab = tabIndex;
                            this.animating = false;
                        }
                    });
                }
            });
        }
        
        
    }

  render() {
    return (
      <div className="TabNavigation">
        <div className="tab-navigators">
            {this.tabs.map((t, i) => (
                <button key={i + 1} ref={'tabButton' + i} className="tab-navigator" data-tab={i + 1}>{t}</button>
            ))}
		</div>
        { this.props.children }
      </div>
    );
  }
}

export default TabNavigator;