//Menu Toggle
const toggleMenu = () => {
    console.log('menu',menu);
    menu.classList.add('open-menu');
    xButton.classList.add('show-x-button');
    menuButton.classList.add('hide-menu-button');
  }

  const toggleX = () => {
    menu.classList.remove('open-menu');
    xButton.classList.remove('show-x-button');
    menuButton.classList.remove('hide-menu-button');
  }

  const xButton = document.querySelector('.x-button');

  const menu = document.querySelector('.menu');

  const menuButton = document.querySelector('.menu-button');

  menuButton.addEventListener('click', () => {
    toggleMenu();
  });

  xButton.addEventListener('click', () => {
    toggleX();
  })


//Tab-Navigation

// class TabLink {
//   constructor(element){
//     this.element = element;
//     this.tabData = this.element.dataset.tab;
//     this.cards = document.querySelector(`.tab-card[data-tab='this.tabData']`);
//     this.cards = Array.from(this.cards).map( card => new TabCard(card));
//     this.element.addEventListener('click', () => {this.selectTab() });
//   }
//   selectTab() {
//       let tabs = document.querySelectorAll('.tab-link');
//   }
// }

//   selectTab(){

//     // Select all elements with the .tab class on them
//     let tabs = document.querySelectorAll('.tab');
//     // Iterate through the NodeList removing the .active-tab class from each element
//     tabs.forEach((tab) => {tab.classList.remove('.active-tab');
//   });
//     // Add a class of ".active-tab" to this.element
//     this.element.classList.add('.active-tab');

//     // Select all of the elements with the .card class on them
//     let cards = document.querySelectorAll('.card');

//     // Iterate through the NodeList setting the display style on each one to 'none'
//     cards.forEach((card) => {card.style.display = 'none'});

//     // Notice we are looping through the this.cards array and invoking selectCard() from the TabCard class, nothing to update here
//     this.cards.forEach(card => card.selectCard());

//   }
// }

// class TabCard {
//   constructor(element){
//     // Assign this.element to the passed in element.
//     this.element = element;
//   }
//   selectCard(){
//     // Update the style of this.element to display = null
//     // console.log('this',this);
//     this.element.style = 'display: null;';
//   }

// }

let tabs = document.querySelectorAll('.tab-link');
tabs = Array.from(tabs).map( tab => new TabLink(tab));


// // Create a reference to all ".tab" classes
// let tabs = document.querySelectorAll(".tab");
// // Map over the array and convert each tab reference into a new TabLink object.  Pass in the tab object to the Tabs class.
// tabs = Array.from(tabs).map( tab => new TabLink(tab));
