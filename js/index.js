// JS goes here

class Tabs {
    constructor(element) {
        this.element = element;
        // console.log(this.element)
        // console.log(element);
        element.addEventListener('click', () => {
            // console.log(element);
            let tabbed = document.querySelectorAll('.tab');
            // console.log(tabbed);
            tabbed = Array.from(tabbed);
            // console.log(tabbed);
            for (let i = 0; i<tabbed.length; i++) {
                tabbed[i].classList.remove('tab-on');
            }
            this.element.classList.add('tab-on');

            document.querySelector('.tabbed').innerHTML = this.element.innerHTML;

            let img = document.querySelectorAll('.service-img');
            img = Array.from(img);
            console.log(img);
            for (let x = 0; x<img.length; x++) {
                img[x].classList.add('vision');
                if (img[x].dataset.tab == this.element.dataset.tab) {
                    img[x].classList.remove('vision');
                }
            }
           });
    }
}


let tabs = document.querySelectorAll('.tab');
tabs = Array.from(tabs).map( tab => new Tabs(tab));

// let img = document.querySelectorAll('.service-img');
// img = Array.from(img);