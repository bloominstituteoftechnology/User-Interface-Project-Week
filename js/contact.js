const form = document.querySelector("form");
const button = document.querySelector(".button");
const sent = document.querySelector(".sent");
const email = document.querySelector("#email");
const textera = document.querySelector("#overview");
const radio = document.querySelector("#small");

console.log(radio.value)





button.addEventListener('click', function(e) {
  if(email.value === "") {
  } else {
    const timeline = new TimelineMax();
    timeline.to(button, 1, {
      ease: Power1.easeOut,
      x: "-100%", opacity: 0, onComplete: () => {
        button.style.display = "none";
      }
    }).fromTo(sent, 2, {
        x: "-100%", opacity: 0}, {
        ease: Elastic.easeOut.config(1, 0.4),
        x: "0%", opacity: 1, onStart: () => {
          sent.classList.toggle("show");
        }
    });
  }
  
});