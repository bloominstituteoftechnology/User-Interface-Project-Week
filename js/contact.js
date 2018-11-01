(() => {
  
  const headerImg = document.querySelector('#jumbotron');
  const h1 = document.querySelector('h1');
  const getInTouch = document.querySelector('form');
  const workSection = document.querySelector('.work');
  const addresses = workSection.querySelectorAll('address');

  let windowResize = () => {

    if (window.innerWidth <= 800) {

      document.querySelector('#jumbotron').src = "./img/contact/contact-mobile-jumbotron.png";

    }

    else {

      document.querySelector('#jumbotron').src = "./img/contact/contact-jumbotron.png";

    }

  }

  window.addEventListener('resize', windowResize);

  windowResize();

  TweenMax.fromTo(headerImg, 1, {opacity: 0, yPercent: -100}, {opacity: 1, yPercent: 0, onComplete: () => {
    TweenMax.fromTo(h1, 1.5, {opacity: 0, xPercent: -150}, {opacity: 1, xPercent: 0, onComplete: () => {
      TweenMax.fromTo(getInTouch, 1, {opacity: 0, yPercent: 20}, {opacity: 1, yPercent: 0, onComplete: () => {
        TweenMax.fromTo(workSection, 1, {opacity: 0, xPercent: 150}, {opacity: 1, xPercent: 0, onComplete: () => {

          for (let i = 0; i < addresses.length; i++) {

            TweenMax.fromTo(addresses[i], 1, {opacity: 0, yPercent: 25}, {opacity: 1, yPercent: 0, delay: 0.5 * i});

          }

        }});
      }});
    }});
  }});

})();
