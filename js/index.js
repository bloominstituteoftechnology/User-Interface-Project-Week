// ===================== Menu ===========================
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuLinks = document.querySelectorAll(".menu-item");
const logo = document.querySelector(".menu-bar p");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("close");
  menuLinks.forEach(link => link.classList.toggle("close"));
  menu.classList.toggle("close");

  logo.classList.toggle("close");
});

menuLinks.forEach(link =>
  link.addEventListener("click", e => {
    e.target.style.transition = "rotateY(180deg)";
  })
);

// ==================== Services Tabs =====================
class Tab {
  constructor(tab) {
    this.tab = tab;
    this.tabData = this.tab.dataset.tab;
    this.tabContent = document.querySelectorAll(
      `.tab-items[data-tab="${this.tabData}"]`
    );

    this.tab.addEventListener("click", () => this.selected());
    this.tabContent = Array.from(this.tabContent).map(
      content => new TabContent(content)
    );

    if (this.tabData === "1") {
      this.tab.classList.add("active-tab");
    }
  }

  selected() {
    const tabs = document.querySelectorAll(".tab");

    tabs.forEach(tab => tab.classList.remove("active-tab"));

    const content = document.querySelectorAll(".tab-items");

    content.forEach(content => (content.style.display = "none"));

    this.tab.classList.add("active-tab");

    this.tabContent.forEach(content => content.toggleContent());
  }
}

class TabContent {
  constructor(tabContent) {
    this.tabContent = tabContent;

    if (this.tabContent.dataset.tab === "1") {
      this.tabContent.style.display = "flex";
    }
  }
  toggleContent() {
    this.tabContent.style.display = "flex";
  }
}

const tabs = document.querySelectorAll(".tab");
tabs.forEach(tab => new Tab(tab));

// =================== Services Continued ==============
const header = document.querySelector(".services-jumbotron .text");
const paragraph = document.querySelector(".top-paragraph");
window.addEventListener("load", _ => {
  header.classList.add("load");
  paragraph.classList.add("load");
});
// =================== Contact Page ====================
const contactHeading = document.querySelector(".contact-jumbotron .text");
const contactJumbotron = document.querySelector(".contact-img");

window.addEventListener("load", _ => {
  contactHeading.classList.add("come-fom-side");
  contactJumbotron.classList.add("come-fom-side");
});

const appear = new ScrollMagic.Controller();
const formIn = new ScrollMagic.Scene({
  triggerElement: ".form"
})
  .setClassToggle(".form", "form-in")
  .addTo(appear);

// =================== ScrollMagic =====================
const flyIn = new ScrollMagic.Controller();
const fly = new ScrollMagic.Scene({
  triggerElement: ".tab"
})
  .setClassToggle(".tab", "fly-in")
  .addTo(flyIn);

const comeDown = new ScrollMagic.Controller();
const down = new ScrollMagic.Scene({
  triggerElement: ".tab-info"
})
  .setClassToggle(".tab-info", "come-down")
  .addTo(comeDown);

const raiseUp = new ScrollMagic.Controller();
const up = new ScrollMagic.Scene({
  triggerElement: ".service-img"
})
  .setClassToggle(".service-img", "go-up")
  .addTo(raiseUp);

// ============= Home Scroll ===================
const blockImg1 = new ScrollMagic.Controller();
const swipe = new ScrollMagic.Scene({
  triggerElement: ".block-img-1"
})
  .setClassToggle(".block-img-1", "swipe")
  .addTo(blockImg1);

const blockImg2 = new ScrollMagic.Controller();
const swipe2 = new ScrollMagic.Scene({
  triggerElement: ".block-img-2"
})
  .setClassToggle(".block-img-2", "swipe")
  .addTo(blockImg2);

const blockH2 = new ScrollMagic.Controller();
const swipe3 = new ScrollMagic.Scene({
  triggerElement: ".block-h2"
})
  .setClassToggle(".block-h2", "swipe")
  .addTo(blockH2);

const blockP = new ScrollMagic.Controller();
const swipe4 = new ScrollMagic.Scene({
  triggerElement: ".block-p"
})
  .setClassToggle(".block-p", "swipe")
  .addTo(blockP);

const blockBtn = new ScrollMagic.Controller();
const swipe5 = new ScrollMagic.Scene({
  triggerElement: ".block-button"
})
  .setClassToggle(".block-button", "swipe")
  .addTo(blockBtn);

const middleBlockText = new ScrollMagic.Controller();
const fadeIn = new ScrollMagic.Scene({
  triggerElement: ".middle-block-text"
})
  .setClassToggle(".middle-block-text", "swipe")
  .addTo(middleBlockText);

const flipImg = new ScrollMagic.Controller();
const flip = new ScrollMagic.Scene({
  triggerElement: ".villa-img"
})
  .setClassToggle(".villa-img", "flip")
  .addTo(flipImg);

const villaInfo = new ScrollMagic.Controller();
const info = new ScrollMagic.Scene({
  triggerElement: ".villa-info"
})
  .setClassToggle(".villa-info", "swipe")
  .addTo(villaInfo);

const outskirtsImg = new ScrollMagic.Controller();
const outskirts = new ScrollMagic.Scene({
  triggerElement: ".outskirts-img"
})
  .setClassToggle(".outskirts-img", "open")
  .addTo(outskirtsImg);

const outskirtsOverlay = new ScrollMagic.Controller();
const skirtsOver = new ScrollMagic.Scene({
  triggerElement: ".overlay-skirts"
})
  .setClassToggle(".overlay-skirts", "open")
  .addTo(outskirtsOverlay);

const outskirtsInfo = new ScrollMagic.Controller();
const skirtsInfo = new ScrollMagic.Scene({
  triggerElement: ".outskirts-info"
})
  .setClassToggle(".outskirts-info", "appear")
  .addTo(outskirtsInfo);

const blockImg = new ScrollMagic.Controller();
const fader = new ScrollMagic.Scene({
  triggerElement: ".the-block-img"
})
  .setClassToggle(".the-block-img", "fader")
  .addTo(blockImg);

const blockOvrl = new ScrollMagic.Controller();
const fader2 = new ScrollMagic.Scene({
  triggerElement: ".the-block-overlay"
})
  .setClassToggle(".the-block-overlay", "fader")
  .addTo(blockOvrl);

const blockInfo = new ScrollMagic.Controller();
const popIn = new ScrollMagic.Scene({
  triggerElement: ".block-info1"
})
  .setClassToggle(".block-info1", "popIn")
  .addTo(blockInfo);

const blockInfo2 = new ScrollMagic.Controller();
const popIn2 = new ScrollMagic.Scene({
  triggerElement: ".block-info2"
})
  .setClassToggle(".block-info2", "popIn")
  .addTo(blockInfo2);
