// JS goes here

class Overlay {
    constructor(overlay) {
        this.overlay = overlay;
        this.button = this.overlay.querySelector('.closed');
        this.content = this.overlay.querySelector('.overlay-content');

        this.button.addEventListener('click', () => {this.toggleContent()});
    }

    toggleContent() {
        this.content.classList.toggle('overlay-hidden');
    }
}

let overlays = document.querySelectorAll('.overlay').forEach( overlay => new Overlay(overlay));