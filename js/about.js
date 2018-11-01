// about.js - JS for about.html

const headerImg = document.querySelector('#jumbotron');
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const members = document.querySelectorAll('.member img');

let windowResize = () => {

  if (window.innerWidth <= 800) {

    document.querySelector('#jumbotron').src = "./img/services/services-mobile-jumbotron.png";

  }

  else {

    document.querySelector('#jumbotron').src = "./img/services/services-jumbotron.png";

  }

}

window.addEventListener('resize', windowResize);

windowResize();

members.forEach(member => {

  member.isActive = false;

  member.addEventListener('click', event => {

      if (!member.isActive) {

      members.forEach(other => {

        if (member != other) {

          TweenMax.to(other.parentNode, 1, {scale: 0, onComplete: () => {
            other.parentNode.style.display = "none";
          }});

        }

      });

      setTimeout(() => {

        TweenMax.to(member.parentNode, 1, {width: '100%'});
        TweenMax.to(member, 1, {borderRadius: '10%'});
        TweenMax.to(member.parentNode, 1, {height: '0%'});
        TweenMax.to(member, 1, {margin: '80px 0'});
        TweenMax.to(member.parentNode, 1, {margin: '0px 20%'});
        TweenMax.to(member.parentNode, 1, {marginBottom: '46px'});
        member.isActive = true;
        member.parentNode.querySelector('.socialBtns').style.display = "block";

      }, 1000);

    }

    else {

      TweenMax.to(member.parentNode, 1, {width: '35%'});
      TweenMax.to(member, 1, {borderRadius: '50%'});
      TweenMax.to(member.parentNode, 1, {height: '400px'});
      member.parentNode.querySelector('.socialBtns').style.display = "none";

      if (!member.parentNode.classList.contains('main-member')) {

        TweenMax.to(member, 1, {margin: '15px 0'});
        TweenMax.to(member.parentNode, 1, {margin: '0 0 8%'});

      }

      else {

        TweenMax.to(member.parentNode.querySelector('img'), 1, {margin: '15px 0'});

      }

      member.isActive = false;

      members.forEach(other => {

        other.parentNode.style.display = "block";
        TweenMax.to(other.parentNode, 1, {scale: 1});

      });

    }

  });

  member.addEventListener('mouseenter', () => {

    if (!member.isActive)
      TweenMax.to(member, 1, {scale: 1.2, borderRadius: '30%'});

  });

  member.addEventListener('mouseleave', () => {

    if (!member.isActive)
      TweenMax.to(member, 1, {scale: 1, borderRadius: '50%'});

  });

});

TweenMax.fromTo(headerImg, 1, {opacity: 0, yPercent: -100}, {opacity: 1, yPercent: 0, onComplete: () => {
  TweenMax.fromTo(h1, 1.5, {opacity: 0, xPercent: -150}, {opacity: 1, xPercent: 0, onComplete: () => {
    TweenMax.fromTo(h2, 1, {opacity: 0, yPercent: 50}, {opacity: 1, yPercent: 0});
  }});
}});
