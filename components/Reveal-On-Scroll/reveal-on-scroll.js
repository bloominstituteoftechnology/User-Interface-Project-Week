const profiles = document.querySelectorAll(".profile");
let isScrolling = false;

window.addEventListener("scroll", throttleScroll, false);

function throttleScroll(e) {
  if (isScrolling == false) {
    window.requestAnimationFrame(function() {
      dealWithScrolling(e);
      isScrolling = false;
    });
  }
  isScrolling = true;
}

function dealWithScrolling(e) {
  console.log("Epic!");

  profiles.forEach(profile => {
    if (isFullyVisible(profile)) {
      TweenMax.to(profile, 1.5, { className: "+=reveal-on-scroll" });
    }
  });
}

function isFullyVisible(el) {
  let elementBoundary = el.getBoundingClientRect();

  let top = elementBoundary.top;
  let bottom = elementBoundary.bottom;

  return top >= 0 && bottom <= window.innerHeight;
}
