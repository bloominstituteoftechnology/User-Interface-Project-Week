let currentItem = 0;

const startCarousel = function (controls, allBlocks){
  // console.log(x)
  init();
}

const init = function(){
  allBlocks.forEach( y => {
    y.style.display = "none";
  });

  activeItem(currentItem);
}

const moveCarouselRight = function(){
  if (currentItem === allBlocks.length-1){
    currentItem = 0;
    activeItem(currentItem);
  } else {
    currentItem = currentItem + 1;
    activeItem(currentItem);
  }
};

const moveCarouselleft = function(){
  if (currentItem === 0){
      currentItem = allBlocks.length-1;
      activeItem(currentItem);
    } else if (currentItem > 0) {
      currentItem = currentItem - 1;
      activeItem(currentItem);
  }
};


const activeItem = function (number) {
  allBlocks.forEach( y => {
    y.style.display = "none";
  });
  allBlocks[number].style.display ="flex"
}

let random = Math.random();
console.log(random)

let allBlocks = document.querySelectorAll('.block');
let allArrows = document.querySelectorAll('.arrow');
let currentItmeHTML = document.querySelectorAll('.arrow');


console.log(currentItem);

allBlocks = Array.from(allBlocks);

allArrows = Array.from(allArrows);

startCarousel(allArrows, allBlocks);

allArrows[1].addEventListener('click', moveCarouselRight)
allArrows[0].addEventListener('click', moveCarouselleft)
