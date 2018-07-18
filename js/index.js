// Navigation

let onHumburger = document.querySelector('.on-humburger');
let offHumburger = document.querySelector('.off-humburger');
let hiddenNavigation = document.querySelector('.hidden-navigation');
let fadingTextArray = document.querySelectorAll('.fade-in');

function fadeIn(elementArray) {
  elementArray.forEach(element => {
    TweenLite.from(element, 0.5, {autoAlpha:0, y: 100}); 
  })
}

onHumburger.addEventListener('click', function(e) {
  let h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  
  TweenMax.from(offHumburger, 0.2, { height: 0 })
  TweenMax.to(offHumburger, 0.3, { height: 20 });

  TweenMax.from(hiddenNavigation, 0.2, { height: 0 })
  TweenMax.to(hiddenNavigation, 0.3, { height: h });
  
  fadeIn(fadingTextArray);

  onHumburger.classList.add('hidden');
  offHumburger.classList.remove('hidden');

  hiddenNavigation.classList.remove('hidden');
  hiddenNavigation.classList.add('expanded');
});

offHumburger.addEventListener('click', function(e) {
  onHumburger.classList.remove('hidden');
  offHumburger.classList.add('hidden');

  hiddenNavigation.classList.add('hidden');
  hiddenNavigation.classList.remove('expanded');
});

// Service
// Tab
class Tabs {
  constructor(tabElement) {
    this.element = tabElement;

    this.tabContent = Array.from(document.querySelectorAll('.top-content'));
    this.tabContent = this.tabContent.map( content => new Content(content) );
    // this.activeTab = this.element;
    this.activeTabContent = this.tabContent[1];

    this.element.addEventListener('click', this.select.bind(this));
    this.init();
  }

  init() {
    this.tabContent.forEach(content => {
      if (content.dataTab === this.activeTabContent.dataTab) {
        content.element.style.display = 'flex';
      } else {
        content.element.style.display = 'none';
      }
    })
  };

  select(e) {
    // change tab content
    this.tabContent.forEach(content => {
      if (content.dataTab === e.target.dataset.tab) {
        // change content
        content.element.style.display = 'flex';
        // update content
        this.activeTabContent = content;
      } else {
        content.element.style.display = 'none';
      }
    })

    // change tab color
    this.activeTabContent.parentTab.style.background = '#5E9FB9';
    this.activeTabContent.emptyTab.forEach(tab => tab.style.background = 'white');
  }
}

// Pure component
// Just showing the content
class Content {
  constructor(contentElement) {
    this.element = contentElement;
    this.dataTab = this.element.dataset.tab;
    this.parentTab = serviceTabs.filter(tab => {
      return tab.dataset.tab === this.dataTab;
    })[0];
    this.emptyTab = serviceTabs.filter(tab => {
      return tab.dataset.tab !== this.dataTab;
    });
  }
}

let serviceTabs = Array.from(document.querySelectorAll('.service-tab'));
serviceTabs = serviceTabs.map(tab => new Tabs(tab));


// Hover text
// About page
function displayText(e) {
  let text = e.target.querySelector('.person-detail');
  text.style = 'display: flex';
}

function hideText(e) {
  let text = e.target.querySelector('.person-detail');
  console.log(text);
  text.style = 'display: none';
}

let avator = Array.from(document.querySelectorAll('.person'));
avator.forEach(icon => icon.addEventListener('mouseover', displayText));
avator.forEach(icon => icon.addEventListener('mouseleave', hideText));