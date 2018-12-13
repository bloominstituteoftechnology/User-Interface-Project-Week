// --- I went with this solution so all instances of this site are redirected to live site.
// --- Including github html preview.

let loc = window.location.origin;
console.log(loc.indexOf);
if (loc.indexOf("https://sjarchitects.akiradj.com") < 0)
	window.location = "https://sjarchitects.akiradj.com";
let toggled = 0;

$(document).ready(() => {
	$("header").load("./navbar.html", () => {
		$("nav").hide();
		document.querySelectorAll("nav a").forEach(data => {
			if (data.lastChild.textContent === document.title) {
				data.classList.add("active");
				data.removeAttribute("href");
			}
		});
		document.querySelector(".menu").addEventListener("click", event => {
			$("nav").slideToggle();

			if (toggled) {
				event.target.setAttribute("src", "./img/nav-hamburger.png");
				toggled = 0;
			} else {
				event.target.setAttribute("src", "./img/nav-hamburger-close.png");
				toggled = 1;
			}
			event.preventDefault();
		});
	});
	$("footer").load("./footer.html");
});
