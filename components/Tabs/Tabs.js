
class TabLink {
  constructor(link) {
    this.link = link;

    this.tabLink = this.link.dataset.tab;
    console.log(this.tabLink);
    this.tabContent = document.querySelector(`.tabs-item[data-tab='${this.tabLink}']`);
    
    this.link.addEventListener('click', () => {this.select()});

    this.tabContent = new TabGuts(this.tabContent);

    
  };
   
  select() {
    const allLinks = document.querySelectorAll(".tabs-link");
    Array.from(allLinks).forEach( link => {link.classList.remove('tabs-link-selected')});
    this.link.classList.add('tabs-link-selected');
    this.tabContent.selectGuts();
  }
}


class TabGuts {
  constructor(tabGuts) {
    this.tabGuts = tabGuts;
    // console.log(this.tabGuts);
  }
  selectGuts() {
    let allGuts = document.querySelectorAll(".tabs-item");
    allGuts.forEach( link => {link.classList.remove('tabs-item-selected')});
    this.tabGuts.classList.add('tabs-item-selected');
    
  }
}

// START HERE: create a reference to the ".tabs-link" class
let links = document.querySelectorAll('.tabs-link');

// Following the code in the Dropdown file, iterate through the array you created above creating a new instance of the TabLink class for each item. 
links = Array.from(links).map( link => new TabLink(link));

// DO THIS LAST: Once you have created an array of TabLink instances. call select() on the first item in the array

console.log(links[0].select());