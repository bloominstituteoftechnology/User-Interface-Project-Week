let hamImages = document.querySelectorAll(".hamburger img");
let expanded = document.querySelector('.hamburger-expanded');
hamImages.forEach(x => {
    x.addEventListener('click', () => {
        hamImages[0].classList.toggle('display');
        hamImages[1].classList.toggle('display');
        expanded.classList.toggle('display');
    })
    x.addEventListener('mouseenter', () => {
        hamImages[0].style.cursor = 'pointer';
        hamImages[1].style.cursor = 'pointer';
    })
});