//carousel.js

carousel = (function(){
    let box = document.querySelector('.carouselbox');
    let next = box.querySelector('.next');
    let prev = box.querySelector('.prev');
    let items = box.querySelectorAll('.content li');
    let counter = 0;
    let amount = items.length;
    let current = items[0];
    box.classList.add('active');
    
    function navigate(direction) {
        current.classList.remove('current');
        counter = counter + direction;
        if (direction === -1 &&
            counter < 0) {
                counter = amount - 1;
            }
        if (direction === 1 &&
            !items[counter]) {
                counter = 0;
            }
        current = items[counter];
        current.classList.add('current');
    }
    next.addEventListener('click', function(ev) {
        navigate(1);
    });
    prev.addEventListener('click', function(ev) {
        navigate(-1);
    });
    navigate(0);
})();
