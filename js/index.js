
//**********************Navigation Open and Close**********************

const navButton = document.querySelector('.navContainer__top-bar img');
const menu = document.querySelector('.menu');


navButton.addEventListener('click', () => menu.classList.toggle('open'));
navButton.addEventListener('click', function() {
  if(menu.classList.contains('open')) {
    navButton.style.content = "url('./img/nav-hamburger-close.png')";
    TweenMax.fromTo(menu, .35, {css: {opacity: 0}}, {css:{opacity: 1}})
  } else {
    TweenMax.fromTo(menu, .35, {css: {opacity: 1}}, {css:{opacity: 0}})
    navButton.style.content = "url('./img/nav-hamburger.png')";
  }
})


//**********************SERVICES PAGE**********************
//**********************Tab Component**********************
class TabLink {
  constructor(element) {
    this.element = element;

    this.data = this.element.dataset.tab;

    this.itemElement = document.querySelector(`.tabNav__content[data-tab="${ this.data }"]`);

    this.tabItem = new TabItem(this.itemElement);

    this.element.addEventListener('click', () => { this.select() });
  };

  select() {
    const links = document.querySelectorAll('.tabNav__tabs button');

    Array.from(links).forEach(link => link.classList.remove('tabs-link-selected'));

    this.element.classList.add('tabs-link-selected');

    this.tabItem.select();
  }
}

class TabItem {
  constructor(element) {
    this.element = element;
  }

  fadeInAnimation() {
    TweenMax.fromTo(this.element, 1, {css: {opacity: 0}}, {css:{opacity: 1}});
  }

  fadeOutAnimation() {
    TweenMax.fromTo(this.element, 1, {css: {opacity: 1}}, {css:{opacity: 0}});
  }

  select() {
    const items = document.querySelectorAll('.tabNav__content');

    items.forEach(link => link.classList.remove('tabs-item-selected'))

    this.element.classList.add('tabs-item-selected');

    this.fadeInAnimation()
  }
}

links = document.querySelectorAll('.tabNav__tabs button')
                .forEach(link => new TabLink(link));


//**********************PROJECTS PAGE**********************
//**********************Carousel Component*****************

//Obtain list of all possible boxes as well as next and prev buttons
const boxList = document.querySelectorAll('.box');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

//when next button is clicked move up one image
next.addEventListener('click', function() {
  const currentSlide = document.querySelector('.show');

  //Use data tab count to find new slide
  let currNum = currentSlide.dataset.tab;
  currNum++;

  if(currNum > boxList.length) {
    //Start from beginning
    const newSlide = document.querySelector(`.box[data-tab="1"]`);
    currentSlide.classList.remove('show');
    newSlide.classList.add('show');
  } else {
    //Move to next image
    const newSlide = document.querySelector(`.box[data-tab="${currNum}"]`)
    currentSlide.classList.remove('show');
    newSlide.classList.add('show');
  }
});


//when next button is clicked move up one image
prev.addEventListener('click', function() {
  const currentSlide = document.querySelector('.show');

  //Use data tab count to find new slide
  let currNum = currentSlide.dataset.tab;
  currNum--;

  if(currNum < 1) {
    //Start from end
    const newSlide = document.querySelector(`.box[data-tab="${boxList.length}"]`);
    currentSlide.classList.remove('show');
    newSlide.classList.add('show');
  } else {
    //Move to prev image
    const newSlide = document.querySelector(`.box[data-tab="${currNum}"]`)
    currentSlide.classList.remove('show');
    newSlide.classList.add('show');
  }
});
