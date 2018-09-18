class NavButton {
  constructor(element) {
    this.element = element;
    this.element.addEventListener("click", () => this.navigator());
  }
  navigator() {
    let nav = document.querySelector(".navigation");
    nav.classList.toggle("navigation-open");
    let open = document.querySelector(".open-menu");
    open.classList.toggle("closed");
    let closedMenu = document.querySelector(".close-menu");
    closedMenu.style.display === "block"
      ? (closedMenu.style.display = "")
      : (closedMenu.style.display = "block");
  }
}

let navButttons = document.querySelectorAll(".change");

navButttons = Array.from(navButttons).map(
  navButton => new NavButton(navButton)
);

class MobileImg {
  constructor(element) {
    this.element = element;
    window.innerWidth <= 500
      ? this.element.classList.remove("closed")
      : this.element.classList.add("closed");
    window.addEventListener("resize", () => this.swapInMobile());
  }
  swapInMobile() {
    window.innerWidth <= 500
      ? this.element.classList.remove("closed")
      : this.element.classList.add("closed");
  }
}

let mobileImgs = document.querySelectorAll(".closed");

mobileImgs = Array.from(mobileImgs).map(mobileImg => new MobileImg(mobileImg));

class DesktopImg {
  constructor(element) {
    this.element = element;
    window.innerWidth > 500
      ? this.element.classList.remove("closed")
      : this.element.classList.add("closed");
    window.addEventListener("resize", () => this.swapInDesktop());
  }
  swapInDesktop() {
    window.innerWidth > 500
      ? this.element.classList.remove("closed")
      : this.element.classList.add("closed");
  }
}

let desktopImgs = document.querySelectorAll(".desktop-img");

desktopImgs = Array.from(desktopImgs).map(
  desktopImg => new DesktopImg(desktopImg)
);


