import '../css/index.css';
// JS goes here
// Navigation Toggle Logic 
const toggler = document.querySelector('.toggler-holder');
const nav = document.querySelector('.navigation');

const toggleNav = () => {
    toggler.classList.toggle('active');
    nav.classList.toggle('navigation--open');
}

toggler.onclick = () => toggleNav();

// TABS LOGIC
class initTab {
    constructor(element) {
        this.element = element;
        this.service = JSON.stringify(this.element.getAttribute('service-tab'));
        this.correspondingPanel = document.querySelector(`.services-section-main[service-tab=${this.service}]`);
        this.title = this.correspondingPanel.querySelector('h2');
        console.log(this.title);
        this.panel = new ServicePanel(this.correspondingPanel);
        this.element.addEventListener('click', (e) => this.tabSelected(e))
    }
    tabSelected(e) {
        const serviceTabs = document.querySelectorAll('.tabs-holder__button');
        serviceTabs.forEach(serTab => {
            serTab.classList.remove('button--active');
        })
        this.element.classList.add('button--active');
        this.panel.selected(e);
    }
}

class ServicePanel {
    constructor(element) {
        this.panel = element;
    }
    selected(e) {
        const panels = document.querySelectorAll('.services-section-main');
        const panelElement = this.panel.querySelector('h2');
        var app = new Vue({
            el: panelElement,
            data: {
              title: e.target.textContent
            }
          })
        panels.forEach(panel => {
            panel.classList.add('hideService');
        })
        this.panel.classList.remove('hideService');
    }
}


const serviceTabs = document.querySelectorAll('.tabs-holder__button');
serviceTabs.forEach(serTab => new initTab(serTab));

// SCROLL ANIMATION LOGIC
const animationElements = document.querySelectorAll('.animated');
window.onscroll = () => {
    animationElements.forEach(element => {
        if ((element.getBoundingClientRect().y - window.innerWidth) < -500) {
            element.classList.add(element.getAttribute('animation-name'));
        }
    })
}