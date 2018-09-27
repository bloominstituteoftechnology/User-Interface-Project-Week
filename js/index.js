// EXPAND NAVIGATION
const navigation = document.querySelector('.navigation');
const navigationMenu = document.querySelector('.navigation__menu');
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.navigation__list');
const navItems = document.querySelectorAll('.navigation__text');

// Add event listener to navigationMenu
navigationMenu.addEventListener('click', () => {
  navigation.classList.toggle('navigation--expanded');
  navList.classList.toggle('navigation__list--expanded');
  // navItems.forEach(item => item.classList.toggle('navigation__text--expanded'));
  if (navigation.classList.contains('navigation--expanded')) {
    TweenMax.to(navigation, 0.15, {
      height: '100vh',
      ease: Power4.easeOut
    });
    TweenMax.to(navItems, 0.25, {
      opacity: 1,
      ease: Power0.easeOut,
      delay: 0.5
    });
  } else {
    TweenMax.to(navigation, 0.1, {
      height: '5rem',
      ease: Power0.easeOut
    });
    TweenMax.to(navItems, 0, {
      opacity: 0,
      ease: Power0.easeOut
    });
  }

  // hamburger
  hamburger.classList.toggle('closed');
  if (hamburger.classList.contains('closed')) {
    hamburger.src = 'img/nav-hamburger-close.png';
  } else {
    hamburger.src = 'img/nav-hamburger.png';
  }
});

const imgs = document.querySelectorAll('.slider-img');
if (window.innerWidth <= 760) {
  imgs.forEach((img, i) => {
    img.src = `img/projects/project-mobile-slider-${i + 1}.jpg`;
  });
}

// REPLACE PROJECT IMGS AT 600px
window.addEventListener('resize', () => {
  imgs.forEach((img, i) => {
    if (window.innerWidth <= 760) {
      img.src = `img/projects/project-mobile-slider-${i + 1}.jpg`;
    } else if (window.innerWidth > 760) {
      img.src = `img/projects/project-slider-${i + 1}.jpg`;
    }
  });
});

// window.addEventListener('scroll', () => {
//   const scrolled = window.scrollY + window.innerHeight;
//   console.log(scrolled);
// });

function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this,
      args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const ctas = document.querySelectorAll('.cta');

function checkSlide(e) {
  ctas.forEach(cta => {
    // halfway through cta
    const slideInAt = window.scrollY + window.innerHeight;
    // bottom of cta
    const ctaBottom = cta.offsetTop;
    const isHalfShown = slideInAt > cta.offsetTop;
    const isNotScrolledPast = window.scrollY < ctaBottom;
    if (isHalfShown && isNotScrolledPast) {
      // cta.firstElementChild.classList.add('slide-in-left');
      TweenMax.to(cta.firstElementChild, 0.5, {
        x: 0,
        opacity: 1
      });
      // cta.lastElementChild.classList.add('slide-in-right');
      TweenMax.to(cta.lastElementChild, 0.5, {
        x: 0,
        opacity: 1
      });
    } else {
      // cta.firstElementChild.classList.remove('slide-in-left');
      TweenMax.to(cta.firstElementChild, 0.5, {
        x: -300,
        opacity: 0
      });
      // cta.lastElementChild.classList.remove('slide-in-right');
      TweenMax.to(cta.lastElementChild, 0.5, {
        x: 300,
        opacity: 0
      });
    }
  });
}

window.addEventListener('scroll', debounce(checkSlide));
