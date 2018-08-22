
const hamburger = document.querySelector("#ham-closed");
const closeNav = document.querySelector("#ham-open");
const mainNav = document.querySelector(".main-nav");

    hamburger.addEventListener("click", () => {
        mainNav.classList.toggle("hide-nav");
        hamburger.classList.toggle("hide-this");
        closeNav.classList.toggle("hide-hamburger");
        console.log('hi');
    });

    closeNav.addEventListener("click", () => {
        mainNav.classList.toggle("hide-nav");
        hamburger.classList.toggle("hide-this");
        closeNav.classList.toggle("hide-hamburger");
    })

   




    // Services page-----------------------------

    const button1 = document.querySelector(".btn-1");
    const button2 = document.querySelector(".btn-2");
    const button3 = document.querySelector(".btn-3");
    const button4 = document.querySelector(".btn-4");
    const middle = document.querySelector(".middle-section");

    button1.addEventListener("click", () => {
        middle.classList.toggle("button-1 content");
        console.log("button 1 clicked");
    });

    button2.addEventListener("click", () => {
        middle.classList.toggle("button-2 content");
    });

    button3.addEventListener("click", () => {
        middle.classList.toggle("button-3 content");
    });

    button4.addEventListener("click", () => {
        middle.classList.toggle("button-4 content");
    });
