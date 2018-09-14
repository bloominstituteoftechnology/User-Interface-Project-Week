const fadeHTML = function() {
    let elements;
    let windowHeight;

    function init() {
        elements = document.querySelectorAll('.hidden');
        windowHeight = window.innerHeight;
        scrollHandlers();
        checkPosition();
    }

    function scrollHandlers() {
        window.addEventListener('scroll', checkPosition);
        window.addEventListener('resize', init);
    }

    function checkPosition() {
        for (let i = 0; i < elements.length; i++) {
            let positionTop = elements[i].getBoundingClientRect().top;
            if (positionTop - windowHeight <= 0) {
                elements[i].className = elements[i].className.replace('hidden', 'fade-in');
            }
        }
    }
    return {
        init: init
    }
}

fadeHTML().init();