// JS goes here
const hamburger = document.querySelector('.hb-btn');
const navLinks = document.querySelector('nav');
hamburger.addEventListener('click', ()=>{
    navLinks.classList.toggle('show-nav');
    navLinks.classList.toggle('hidden');
    hamburger.style.zIndex="5";
    if(navLinks.classList.contains('show-nav')){
        hamburger.src="img/nav-hamburger-close.png"
        
    } else{
        hamburger.src="img/nav-hamburger.png"
        
    }
});

// const projectTitles = [
//     "construction" = "The Winslow Hotel - 2015",
//      "pre-construction" = "The Montaugue - 2008",
//      "sustainability" = "The Chesapeake - 2017",
//      "design-build" = "Rolling Rivers Complex - 2012"
//  ]
//  class Project {
//      constructor(attributes){
//          this.header = attributes.header;
//      }
//  }

 const projectTitle = [
     winslow= "The Winslow Hotel - 2015",
     montague= "The Montague - 2008",
     chesapeake= "The Chesapeake - 2017",
     rolling= "Rolling Rivers Complex - 2012",
 ]

const images = document.querySelectorAll('.caro-img');

images.forEach( image => {
    if(image.style.display ==="block"){
        console.log(image);
    }
}
)