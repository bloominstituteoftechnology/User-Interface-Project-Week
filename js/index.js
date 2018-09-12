// JS goes here
let nav = document.querySelector('.top-bar nav');
let navBtn = document.querySelector('.nav-btn');

navBtn.addEventListener('click', function(event) {
  nav.classList.toggle('hide');
  if (
    event.currentTarget.innerHTML ===
    '<img src="img/nav-hamburger-close.png" alt="Nav Button">'
  ) {
    event.currentTarget.innerHTML =
      '<img src="img/nav-hamburger.png" alt="Nav Button">';
  } else {
    event.currentTarget.innerHTML =
      '<img src="img/nav-hamburger-close.png" alt="Nav Button">';
  }
});
