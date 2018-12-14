class NavBar {
  constructor(item) {
    this.item = item;
    this.burgerButton = this.item.querySelector(".burger");

    this.content = this.item.querySelector(".nav-container");
    this.navclicked = this.item.querySelector(".nav--clicked");
    this.navitems = this.item.querySelector("nav");
    this.images = this.item.querySelectorAll("img");

    this.hamburgerclose = this.item.querySelector(".hamburger-close");
    // toggle off nav--clicked class, nav anchor tags and x icon on load
    this.content.classList.toggle("nav--clicked");
    this.images[1].style.display = "none"
    this.navitems.style.display = "none";
  
    

    this.burgerButton.addEventListener("click", ()=>this.burgerMenu());

  }
  burgerMenu() {

    // if nav--clicked is toggled on, turn them off and switch back to burger
    if (this.navitems.style.display === "flex") {
      this.navitems.style.display = "none"
      this.images[1].style.display = "none"
      this.images[0].style.display = "block"
    } else {
      // if nav--clicked is toggled off, turn it on and change icon
      this.navitems.style.display = "flex"
      this.images[1].style.display = "block"
      this.images[0].style.display = "none"
    }
  
      this.content.classList.toggle("nav--clicked")
  }
}

let navbar = document.querySelectorAll(".nav-bar")
                       .forEach(item=>new NavBar(item));

