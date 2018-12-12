// JS goes here

class Overlay {
    constructor(overlay) {
        this.overlay = overlay;
        this.button = this.overlay.querySelector('.icon');
        this.content = this.overlay.querySelector('.overlay-content');
        this.closeButton = this.overlay.querySelector('.closeBtn');

        this.button.addEventListener('click', () => {this.toggleContent()});
        this.closeButton.addEventListener('click', () => {this.toggleContent()});
    }

    toggleContent() {
        this.content.classList.toggle('overlay-hidden');
        this.overlay.querySelector('.icon').classList.toggle('icon-hidden');
        this.overlay.querySelector('.closeBtn').classList.toggle('icon-hidden');
    }
}

let overlays = document.querySelectorAll('.dropdown').forEach( overlay => new Overlay(overlay));