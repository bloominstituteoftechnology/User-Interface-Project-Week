class Carousel {

}

let carousel = document.querySelector('.carousel');
let leftButton = carousel.querySelector('.left-button')
let rightButton = carousel.querySelector('.right-button')
let cImages = carousel.querySelectorAll('img')
let index = 0;
cImages[index].style.display = 'block';
leftButton.addEventListener('click', () => {
    if (index === 0) {
       index = cImages.length
    }
    cImages.forEach( (item) => {
        item.style.display = 'none'
    })
    cImages[--index].style.display = 'block';
})

rightButton.addEventListener('click', () => {
    if (index === cImages.length -1) {
        index = -1;
     }
     cImages.forEach( (item) => {
         item.style.display = 'none'
     })
    cImages[++index].style.display = 'block';

})