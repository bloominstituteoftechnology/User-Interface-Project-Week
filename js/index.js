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
        this.panel = new ServicePanel(this.correspondingPanel);
        this.element.addEventListener('click', () => this.tabSelected())
    }
    tabSelected() {
        const serviceTabs = document.querySelectorAll('.tabs-holder__button');
        serviceTabs.forEach(serTab => {
            serTab.classList.remove('button--active');
        })
        this.element.classList.add('button--active');
        this.panel.selected();
    }
}

class ServicePanel {
    constructor(element) {
        this.panel = element;
    }
    selected() {
        const panels = document.querySelectorAll('.services-section-main');
        panels.forEach(panel => {
            panel.classList.add('hideService');
        })
        this.panel.classList.remove('hideService');
    }
}


const serviceTabs = document.querySelectorAll('.tabs-holder__button');
serviceTabs.forEach(serTab => new initTab(serTab));