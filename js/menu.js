let navbar = document.querySelector('.navbar');
let hamburger = document.querySelector('.hamburger');
let hamburgerImage = document.querySelector('.navbar img')

window.addEventListener('scroll', ()=>{
	navbar.style.background = '#777';
	navbar.style.opacity = '.95';
})

hamburger.addEventListener('click', ()=> {
		navbar.classList.toggle('navbar-active')
		if (hamburger.src.indexOf('nav-hamburger.png')!=-1) {
            hamburger.src  = 'img/nav-hamburger-close.png';
        }
         else {
          hamburger.src = 'img/nav-hamburger.png';
       }
})