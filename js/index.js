let overlay = document.querySelector(".overlay");
let menuBtn = document.querySelector(".dropdown-button");
let closeBtn = document.querySelector(".close-btn");

console.log(menuBtn)

menuBtn.addEventListener('click', function() {
  overlay.style.display = "block";
});

closeBtn.addEventListener('click', function() {
  overlay.style.display = "none";
});


window.addEventListener('scroll', function () {
        let nav = document.querySelector('.navigation');
        if (document.documentElement.scrollTop > 50 || document.body.scrollTop > window.innerHeight) {
                nav.classList.add('navigation-bg');
                nav.classList.remove('navigation-clear');
            } else {
                nav.classList.add('navigation-clear');
                nav.classList.remove('navigation-bg');
            }
    });
