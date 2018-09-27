// ========= CAROUSEL ==========

let carousel = document.querySelector(".carousel");
let leftButton = carousel.firstElementChild;
let rightButton = carousel.lastElementChild;
let images = carousel.querySelectorAll(".slide");
let index = 0;
let tl = new TimelineMax();
console.log(images);

// window.addEventListener("load", () => {
//   TweenMax.from(".slide__text", 1, { autoAlpha: 0 });
// });

window.addEventListener("load", () => {
  TweenLite.from(".slide__text", 1, { autoAlpha: 0, y: 10 });
});

images[index].style.display = "block";
rightButton.addEventListener("click", () => {
  if (index === 3) {
    index = -1;
  }
  images.forEach(image => (image.style.display = "none"));
  images[++index].style.display = "block";
  //   TweenMax.from(images[index], 1, { opacity: 0 });
  tl.from(images[index], 1, { opacity: 0 }).from(
    ".slide__text",
    0.8,
    {
      autoAlpha: 0,
      y: 10
    },
    "-=0.7"
  );
});
leftButton.addEventListener("click", () => {
  if (index === 0) {
    index = 4;
  }
  images.forEach(image => (image.style.display = "none"));
  images[--index].style.display = "block";
  //   TweenMax.from(images[index], 1, { opacity: 0 });
  tl.from(images[index], 1, { opacity: 0 }).from(
    ".slide__text",
    0.8,
    {
      autoAlpha: 0,
      y: 10
    },
    "-=0.7"
  );
});
