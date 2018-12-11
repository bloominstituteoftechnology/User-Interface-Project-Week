// JS goes here
class Tab {
	constructor(tab) {
		this.tab = tab;
		tab.addEventListener("click", data => this.changeTab(data.target));
	}
	changeTab(tab) {
		document.querySelector(".selected").classList.remove("selected");
		tab.classList.add("selected");
		document.querySelector(".active").classList.remove("active");
		document
			.querySelector(`.tab-content[data-index="${tab.innerText}"]`)
			.classList.add("active");
		document.querySelector(".tab-nav").scrollIntoView();
	}
}

const tabs = document
	.querySelectorAll(".tab-nav div")
	.forEach(tab => new Tab(tab));
