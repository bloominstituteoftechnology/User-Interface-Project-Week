// JS goes here

//for Navbar
const pages = [{
    name: "Home",
    url: "index.html"
}, {
    name: "Services",
    url: "services.html"
}, {
    name: "Contact",
    url: "contact.html"
}];
const navButton = document.querySelector("#navButton");
const navBar = document.querySelector(".navBar");
const navRow = document.querySelector(".navRow");


const openCloseToggle = () => {
    if (navButton.classList[0] === "navButtonOpen") {
        navButton.src = "img/nav-hamburger-close.png";
        navButton.classList.remove('navButtonOpen');
        const navArea = document.createElement('div')
        navArea.classList.add('navExpanded')
        navArea.dataset.aos = "slide-down";
        let htmlConstructor = "";
        htmlConstructor += `<div class='navItems'>`;
        pages.forEach(function (element) {
            if (document.title === element.name) {
                htmlConstructor += `<a class='navText pageSelected' href='${element.url}'>${element.name}</a>`;
            } else {
                htmlConstructor += `<a class='navText' href='${element.url}'>${element.name}</a>`;
            }
        });

        htmlConstructor += `</div>`;

        navArea.innerHTML = htmlConstructor;

        navRow.appendChild(navArea);

    } else {
        navButton.src = "img/nav-hamburger.png";
        navButton.classList.add('navButtonOpen');
        document.querySelector(".navExpanded");
        let fish = navRow.removeChild(document.querySelector(".navExpanded"));

    }


}

navButton.addEventListener("click", openCloseToggle);


let currentImg = 0;
const slideChange = () => {
    switch (currentImg) {
        case 0:
            document.getElementById("image0").classList.add("hidden");
            document.getElementById("image1").classList.remove("imgNext");
            document.getElementById("image2").classList.remove("hidden");
            document.getElementById("image2").classList.add("imgNext");

            currentImg = 1;
            break;
        case 1:
            document.getElementById("image1").classList.add("hidden");
            document.getElementById("image2").classList.remove("imgNext");
            document.getElementById("image0").classList.remove("hidden");
            document.getElementById("image0").classList.add("imgNext");


            currentImg = 2;

            break;
        case 2:
            document.getElementById("image2").classList.add("hidden");
            document.getElementById("image0").classList.remove("imgNext");
            document.getElementById("image1").classList.remove("hidden");
            document.getElementById("image1").classList.add("imgNext");

            currentImg = 0;

            break;




    }
}
const slideTimer = setInterval(slideChange, 5000);