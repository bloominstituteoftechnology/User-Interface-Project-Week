// JS goes here

// ***************************************
// *********NAVIGATION BACKDROP***********
// ***************************************

const hamburger = document.querySelector('img.header__nav-links__hamburger');
const navBackdrop = document.querySelector(".nav-backdrop");
const navContainer = document.querySelector('.nav-link-container');
const navAnchors = document.querySelector('a');
// console.log(navAnchors);


// hamburger.addEventListener('click', () => {
//   if(!navBackdrop.classList.contains('active') && !navContainer.classList.contains('open')) {
//     TweenMax.to(navBackdrop, 1, {opacity: 1, top: 0, ease:Power2.easeInOut});
//     navBackdrop.classList.add('active');
//     navContainer.classList.add("open");
//     hamburger.src="img/nav-hamburger-close.png";
    
//   } else if (navBackdrop.classList.contains('active') && navContainer.classList.contains('open')) {
//     TweenMax.to(navBackdrop, 1, {opacity: 0, top: "-100%", ease:Power2.easeInOut});
    
//     navBackdrop.classList.remove('active');
//     navContainer.classList.remove("open");
//     hamburger.src="img/nav-hamburger.png";
//     // TweenMax.to(navBackdrop, 2, {width:"100vw", height: "100vh", ease:Power2.easeInOut});
//   }
// })

var t1 = new TimelineMax({paused: true});

// t1.to(".one", 0.8, {
//     y: 6,
//     rotation: 45,
//     ease: Expo.easeInOut
// });
// t1.to(".two", 0.8, {
//     y: -6,
//     rotation: -45,
//     ease: Expo.easeInOut,
//     delay: -0.8
// });

t1.to(".menu", 1, {
    top: "0%",
    width: "100%",
    ease: Expo.easeInOut,
    delay: -.25,
    opacity: 1
});

t1.staggerFrom(".menu ul li", .5, {opacity: 0, ease:Expo.easeOut}, 0.3);

t1.reverse();
hamburger.addEventListener("click", function() {
  console.log(t1);
    t1.reversed(!t1.reversed());
});
navAnchors.addEventListener("click", function() {
  t1.reversed(!t1.reversed())
})




// ***************************************
// ******* SERVICES TAB COMPONENT ********
// ***************************************

class TabToggle {
  constructor(element) {
    this.element = element;
    this.data = this.element.dataset.tab;
    this.itemElement = document.querySelector(`.services__tabs-card[data-tab='${this.data}']`);
    this.tabCard = new TabCard(this.itemElement);
    this.element.addEventListener('click', () => this.select())
  }
  select(){
    const toggleTabs = document.querySelectorAll('.services__tabs-tab');
    toggleTabs.forEach( tab => tab.classList.remove('active-tab'));
    this.element.classList.add('active-tab');
    this.tabCard.select();
  }
}

class TabCard {
  constructor(element) {
    this.element = element;
  }
  select() {
    let tabCards = document.querySelectorAll('.services__tabs-card');
    tabCards.forEach(card => card.classList.remove('active-card'));
    this.element.classList.add('active-card');
  }
}

let tabs = document.querySelectorAll('.services__tabs-tab');
tabs = Array.from(tabs).map(tab => new TabToggle(tab));
