class Carousel {
	constructor(carousel) {
		this.carousel = carousel;
		this.buttonRight = document.querySelector(".right-button");
		this.buttonRight.addEventListener("click", () => this.rightClick());
		this.buttonLeft = document.querySelector(".left-button");
		this.buttonLeft.addEventListener("click", () => this.leftClick());
		this.images = document.querySelectorAll(".carousel img");
		this.images.forEach(image => (image.style.display = "none"));
		this.currentIndex = 1;
		this.max = this.images.length;
		this.displayImage();
	}
	// Maybe ill combine right and left click into 1 function. Param = right or left
	rightClick() {
		let currentImg = (document.querySelector(
			`.carousel img[data-value="${this.currentIndex}"]`
		).style.display = "none");
		if (this.currentIndex < this.max) {
			this.currentIndex++;
		} else this.currentIndex = 1;
		this.displayImage();
	}
	leftClick() {
		document.querySelector(
			`.carousel img[data-value="${this.currentIndex}"]`
		).style.display = "none";
		if (this.currentIndex <= 1) {
			this.currentIndex = this.max;
		} else this.currentIndex--;
		this.displayImage();
	}
	displayImage() {
		let currentImg = document.querySelector(
			`.carousel img[data-value="${this.currentIndex}"]`
		);
		currentImg.style.display = "inline";
	}
}

let carousel = document.querySelector(".carousel");
carousel = new Carousel(carousel);
