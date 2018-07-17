// JS goes here
const pages = ["Home","Services","Contact"];
const navButton = document.querySelector("#navButton");
const navBar = document.querySelector(".navBar");
const navRow = document.querySelector(".navRow");


const openCloseToggle = () =>{
    if(navButton.classList[0] === "navButtonOpen"){
        navButton.src = "img/nav-hamburger-close.png";
        navButton.classList.remove('navButtonOpen');
        const navArea = document.createElement('div')
        navArea.classList.add('navExpanded')

    let htmlConstructor = "";
    htmlConstructor +=`<div class='navItems'>`;
        pages.forEach(function(element) {
            if(document.title === element){
                htmlConstructor +=`<a class='navText pageSelected' href='#'>${element}</a>`;
            }
            else{
            htmlConstructor +=`<a class='navText' href='#'>${element}</a>`;
            }
        });

        htmlConstructor +=`</div>`;

        navArea.innerHTML=htmlConstructor;

        navRow.appendChild(navArea);

    }
    else{
        navButton.src = "img/nav-hamburger.png";
        navButton.classList.add('navButtonOpen');
        let fish = navRow.removeChild(document.querySelector(".navExpanded"));

    }
    

}

navButton.addEventListener("click", openCloseToggle);
