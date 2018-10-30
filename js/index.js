// JS goes here

// let open = true;

// const toggleHam = () => {
 
//   nav.classList.toggle("nav-off");
//   header.classList.toggle("header-open");
// }

// const hamburger = document.querySelectorAll(".ham");
// const nav = document.querySelector(".nav");
// const header = document.querySelector(".header");
// hamburger.addEventListener("click", toggleHam);

class Hamburger{
    constructor(item){
        this.item = item;
        this.src = item.src;
        console.log(this.src);
        this.item.addEventListener('click', () => this.toggle());
    }
    toggle(){
        console.log('clicked');
        // if(this.src == '../img/nav-hamburger.png'){
        //     this.src = '../img/nav-hamburger-close.png';
        // }else if(this.src == '../img/nav-hamburger-close.png'){
        //     this.src = '../img/nav-hamburger.png';
        // }
        // this.nav.classList.toggle("nav-off");
        // this.header.classList.toggle('header-open');
        
        nav.classList.toggle("nav-off");
        header.classList.toggle('header-open');

    }

}

let hamburger = document.querySelectorAll(".ham");
const nav = document.querySelector('.nav');
const header = document.querySelector('.header');
console.log(hamburger);

hamburger = Array.from(hamburger).map((item) => {
    return new Hamburger(item);
  });

  console.log(hamburger);
