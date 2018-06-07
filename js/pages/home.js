(function (library) {

    library(window, document);

}

(function (window, document) {

  const features = document.querySelectorAll('.feature');
  const projects = document.querySelectorAll('.project');

  const allAnimatedElements = [];
  const isAnimated = [];
  const scrollAnimBufferY = 200;

  let ticking = false;

  init();

  function init() {
    const navElement = document.querySelector('nav');
    const nav = new Navigation(navElement, window, document);
    nav.init();

    const headerElement = document.querySelector('header');
    const header = new Header(headerElement, window);
    header.init();

    for (let i = 0; i < features.length; i++) {
      allAnimatedElements.push(features[i]);
      isAnimated.push(false);
    }

    for (i = 0; i < projects.length; i++) {
      allAnimatedElements.push(projects[i]);
      isAnimated.push(false);
    }

    window.addEventListener('scroll', () => onScroll());
  }

  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(() => controlAnimations()); // to save computations
      ticking = true;
    }
    
  }

  function controlAnimations() {
    let windowHeight = window.innerHeight
    let elementRectangle = document.querySelector('.feature__content').getBoundingClientRect();
    
    for (let i = 0; i < allAnimatedElements.length; i++) {
      if (!isAnimated[i]) {
        elementRectangle = allAnimatedElements[i].getBoundingClientRect();
        if (elementRectangle.top < windowHeight - scrollAnimBufferY) {
          allAnimatedElements[i].classList.add('is-showing');
          isAnimated[i] = true;
          console.log('fade in');
        }
      }
    }    

    //console.log(windowHeight, rect);
    ticking = false;
  }

}));
