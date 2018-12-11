

// Nav Bar responsiveness
const navbar = document.querySelector("nav");
const hamburger = document.querySelector(".hamburger");
const header = document.querySelector("header");
const navbarImage = document.querySelector('.hamburger img');
let menu = new TimelineMax({paused:true, reversed:true})
let clicked = false;

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('show-nav');
    header.classList.toggle('transparent-bg');
})

//Service -> Tabs
class TabLink {
    constructor(element) {
      this.element = element;
      this.data = this.element.dataset.tab; 
      this.itemElement = document.querySelector(`.tabs-item[data-tab="${this.data}"]`);
      this.itemElement = new TabItem(this.itemElement);
      this.element.addEventListener('click', () => {this.select(element)});
    };
  
    select() {
      const links = document.querySelectorAll('.tabs-link');
      links.forEach(link => {
        link.classList.remove('tabs-link-selected');
      });
      this.element.classList.add('tabs-link-selected'); 
      this.itemElement.select();   
    }
  }
  
  class TabItem {
    constructor(element) {
      this.tabItem = element;
    }
  
    select() {
      const items = document.querySelectorAll('.tabs-item');
      items.forEach(item => {
        item.classList.remove('tabs-item-selected');
      });
      this.tabItem.classList.add('tabs-item-selected');
    }
  }
  
  const links = document.querySelectorAll('.tabs-link').forEach(link => new TabLink(link));


  //Functions
  
  // function swapImage() {
  //   if(clicked === true){
  //     navbarAnimation();
  //     navbarImage.src = '/img/nav-hamburger.png';
  //     clicked = false;
  //   }
  //   else{
  //     navbarAnimation();
  //     clicked = true;
  //     navbarImage.src = '/img/nav-hamburger-close.png';
  //   }
  // }
  // function navbarAnimation() {
  //   navAnimation.to(hamburger, 0.1, {
  //     rotation:2
  //   })
  //     .to(hamburger, 0.1, { 
  //       ease: Bounce.easeNone
  //     }, 0.1)
  //   //end at 0
  //     .to(hamburger, 0.1, {
  //       rotation:0
  //     }, "+=0.5")
  // }




	//Menu Animation
	menu
	.to("#burger1", .5, {rotation: 45, transformOrigin: "left 50%", ease:Power2.easeInOut}, "cross")
	.to("#burger2", .5, {autoAlpha: 0}, "cross")
	.to("#burger3", .5, {rotation: -45, transformOrigin: "left 50%", ease:Power2.easeInOut}, "cross")
	function menuIn() {
    menu.reversed() ? menu.play() : menu.reverse();	
  }
  
 
//Scroll into view animation
let showOnScroll = function() {
  let elems;
  let windowHeight;

  function init() {
    elems = document.querySelectorAll(".hidden");
    windowHeight = window.innerHeight;
    addEventHandlers();
    checkPosition();
  }

  function addEventHandlers() {
    window.addEventListener("scroll", checkPosition);
    window.addEventListener("resize", init);
  }

  function checkPosition() {
    for (var i = 0; i < elems.length; i++) {
      let positionFromTop = elems[i].getBoundingClientRect().top;
      if (positionFromTop - windowHeight <= -170) {
        TweenMax.to(elems[i], 2, {
          opacity: 1
        });
      }
    }
  }
  return {
    init: init
  };
};
showOnScroll().init();