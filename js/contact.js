

const startCarousel = function (controls, allBlocks){
  // console.log(x)
  init(allBlocks);
  // moveCarousel();
}

const init = function(allBlocks){
  allBlocks.forEach( y => {
    y.style.display = "none";
  });
  currentItem(0);
}

const moveCarousel = function(allArrows, allBlocks){
  allArrows[1].addEventListener('click', function (allBlocks){
    console.log('hi right');
    for (let i = 0; i < allBlocks.length; i++){
      activeItem(curentItem + 1)
      console.log('hi right');
    }
  });
}

const currentItem = function (number) {
  allBlocks[number].style.display ="flex";
}

let allBlocks = document.querySelectorAll('.block');
let allArrows = document.querySelectorAll('.arrow');

// console.log(allBlocks);

allBlocks = Array.from(allBlocks);

allArrows = Array.from(allArrows);

// console.log(allBlocks[1]);
// console.log(allArrows[1]);

startCarousel(allArrows, allBlocks);
