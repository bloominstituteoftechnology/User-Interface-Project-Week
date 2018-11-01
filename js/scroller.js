// scroller.js - Function that shows items on scroller

let scrollElements = Array.from(document.querySelectorAll('.scroll-hide'));

const scrollFunction = () => {

  scrollElements.forEach(element => {

    if (element.offsetTop < window.pageYOffset + window.innerHeight - element.clientHeight / 3) {

      TweenMax.to(element, 1, {opacity: 1});
      scrollElements.splice(scrollElements.indexOf(element), 1);

      if (scrollElements.length == 0)
        window.removeEventListener('scroll', scrollFunction);

    }

  });

}

window.addEventListener('scroll', scrollFunction);
