{
    let expandette = document.querySelector(".expander");
    const hamburger = document.querySelector(".menu-button");
    const closer = document.querySelector(".closebtn");

    function openNav() {
        expandette.style.height = "100vh";
        closer.style.display = "block";
        hamburger.style.display = "none";

    }

    function closeNav() {
        expandette.style.height = "0vh";
        hamburger.style.display = "block";
        closer.style.display = "none";
    }
}