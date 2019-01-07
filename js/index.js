// class TabLink {
//   constructor(tabElement){
//     // assign this.tabElement to the tabElement DOM reference
//     this.tabElement = tabElement;
    
//     // Get the `data-tab` value from this.tabElement and store it here
//     this.tabData = this.tabElement.dataset.tab; 
//     if(this.tabData === 'all'){
//       // If `all` is true, select all cards regardless of their data attribute values
//       this.cards = document.querySelectorAll(`.card`);
//     } else {
//       // else if `all` is false, only select the cards with matching this.tabData values
//       this.cards = document.querySelectorAll(`.card[data-tab="${this.tabData}"]`) ;
//     }
//     // Map over the newly converted NodeList we just created in our if statement above. Convert each this.cards element into a new instance of the TabCard class. Pass in a card object to the TabCard class. 
//     this.cards = Array.from(this.cards).map(card => new TabCard(card));

//     // Add a click event that invokes this.selectTab
//     this.tabElement.addEventListener('click', () => {this.selectTab()
//     });
//   }

//   selectTab(){
//     // Select all elements with the .tab class on them
//     const tabs = document.querySelectorAll(".tab");
    
//     // Iterate through the NodeList removing the .active-tab class from each node
//     tabs.forEach( tab => {
//       tab.classList.remove("active-tab");
//     })

//     // Select all of the elements with the .card class on them
//     const cards = document.querySelectorAll('.card');
    
//     // Iterate through the NodeList setting the display style each one to 'none'
//     cards.forEach( card => card.style.display = 'none');

//     // Add a class of ".active-tab" to this.tabElement
//     this.tabElement.classList.add("active-tab");
    
//     // Notice we are looping through the this.cards array and invoking selectCard() from the TabCard class. Nothing to update here, the code is written for you to study.
//     this.cards.forEach(card => card.selectCard());
//   }
// }

// class TabCard {
//   constructor(cardElement){
//     this.cardElement = cardElement;
//   }
//   selectCard(){

//     this.cardElement.style.display = "flex";
//   }

// }


// let tabs = document.querySelectorAll('.tab').forEach(tab => {new TabLink(tab)});

