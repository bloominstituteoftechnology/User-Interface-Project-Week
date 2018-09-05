// Scroll Animations

// Black and White -> Color

class GreyScaleAnim {
    constructor(element, delay, name = "default") {
        this.element = element;
        this.delay = delay;
        this.name = name;
        this.element.classList.add("greyscale");
        window.addEventListener('scroll',() => this.isVisible());
    }

    isVisible() {

        let position = this.element.getBoundingClientRect();
        console.log(this.name + ": " + position.bottom);
        console.log(window.scrollY);
        if (position.bottom >= this.delay) {
            this.element.classList.add("greyscale");
        } else {
            this.element.classList.remove("greyscale");
        }
    }
}

let images = document.querySelectorAll("img");
let banners = document.querySelectorAll(".project-banner");

let banner1 = banners[0];
let banner2 = banners[1];
let banner3 = banners[2];

images = Array.from(images).map(element => new GreyScaleAnim(element, 950));

images = Array.from(banners).map(element => new GreyScaleAnim(element, 950));

// new GreyScaleAnim(banner1, 48, "banner 1");
// new GreyScaleAnim(banner2, 738, "banner 2");
// new GreyScaleAnim(banner3, 1430, "banner 3");