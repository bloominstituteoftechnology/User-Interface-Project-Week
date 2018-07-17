// Navigation

let onHumburger = document.querySelector('.on-humburger');
let offHumburger = document.querySelector('.off-humburger');
let hiddenNavigation = document.querySelector('.hidden-navigation');

onHumburger.addEventListener('click', function(e) {
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
    this.tabContent = topContent.map(content => new Content(content));
    this.activeTab = this.tabContent[1];

    this.element.addEventListener('click', this.select.bind(this));
    this.init();
  }

  init() {
    this.tabContent.forEach(content => {
      if (content.dataTab === this.activeTab.dataTab) {
        content.element.style.display = 'flex';
      } else {
        content.element.style.display = 'none';
      }
    })
  };

  select(e) {
    this.tabContent.forEach(content => {
      if (content.dataTab === e.target.dataset.tab) {
        content.element.style.display = 'flex';
        this.activeTab = content;
        console.log(this.activeTab);
      } else {
        content.element.style.display = 'none';
      }
    })
  }
}

class Content {
  constructor(contentElement) {
    this.element = contentElement;
    this.dataTab = this.element.dataset.tab;
  }
}

let topContent = Array.from(document.querySelectorAll('.top-content'));
let serviceTabs = Array.from(document.querySelectorAll('.service-tab'));
serviceTabs = serviceTabs.map(tab => new Tabs(tab));