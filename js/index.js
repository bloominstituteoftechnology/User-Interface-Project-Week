// JS goes here


//\\//\\//\\//\\//\\//\\//\\
//
// Navigation Modal
//
//\\//\\//\\//\\//\\//\\//\\

// listen to hamburger for click



// if no modal -> overlay navigation modal



// else -> hide navigation modal






//\\//\\//\\//\\//\\//\\//\\
//
// Tab navigator
//
//\\//\\//\\//\\//\\//\\//\\
class TabNavigatorLink {
  constructor(element) {
    this.element = element;
    this.tabData = this.element.dataset.tab;
    this.tabContents = document.querySelector(`.tab--content[data-tab='${this.tabData}']`);
    this.tabContents = tabContent => new TabContent(tabContent);
    console.log(this.tabContents);

    this.element.addEventListener('click', (e) => { this.selectTab(e) });
  }

  selectTab() {
    const tabs = document.querySelectorAll('.tab');

    tabs.forEach(tab => tab.classList.remove('tab--selected'));

    this.element.classList.add('tab--selected');

    const contents = document.querySelectorAll('.tab--content');

    contents.forEach(content => content.style.display= 'inline');
    this.tabContents.selectContent();
  }
}

class TabContent {
  constructor(element) {
    this.element = element;
    console.log('contents');
  }
  selectContent() {
    this.element.style.display = '';
  }
}

let tabs = document.querySelectorAll('.tab');

tabs = Array.from(tabs).map(tab => new TabNavigatorLink(tab));