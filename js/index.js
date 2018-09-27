//menu
{
    let expandette = document.querySelector('.expander');
    const hamburger = document.querySelector('.menu-button');
    const closer = document.querySelector('.closebtn');

    function openNav() {
        expandette.style.height = '100vh';
        closer.style.display = 'block';
        hamburger.style.display = 'none';
    }

    function closeNav() {
        expandette.style.height = '0vh';
        hamburger.style.display = 'block';
        closer.style.display = 'none';
    }

    hamburger.addEventListener('click', (event) => {
        this.openNav();
    });

    closer.addEventListener('click', (event) => {
        this.closeNav();
    });
}

//lightbox
{
    let modal = document.querySelector('.modal');

    let slide = document.querySelector('.mySlide');
    let closeM = document.querySelector('.modalX');

    function openModal(event, url) {

        modal.style.width = '100vw';
        closeM.style.display = 'block';
        slide.style.backgroundImage = `url(${url})`;
        console.log(slide.style.backgroundImage);
    }

    function closeModal() {
        modal.style.width = '0vw';

    }
}

//gallery view buttons
{

    // Get the elements with class="column"
    const elements = document.querySelectorAll(".column");
    const hoverDivs = document.querySelectorAll(".column img");
    console.log(elements);
    console.log(hoverDivs);
    // Full-width images
    function one() {
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.width = "100%";

        }
        Array.from(hoverDivs).forEach(function(image) {
            image.style.height = "80vh";
        });
    }

    // Two images side by side
    function two() {
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.width = "50%";
        }
        Array.from(hoverDivs).forEach(function(image) {
            image.style.height = "30rem";
        });
    }

    // Four images side by side
    function four() {
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.width = "25%";
        }
        Array.from(hoverDivs).forEach(function(image) {
            image.style.height = "60%";
        });
    }
}