// JS goes here

const hamburgerButton = document.querySelector('.menu-button-open');
const closeButton = document.querySelector('.menu-button-close');
const menu = document.querySelector('.menu');

hamburgerButton.addEventListener('click', function(event){
	     let target = event.target
	     target.classList.add("button-close");
	     closeButton.classList.add('button-open');
         menu.classList.add("menu-open");
          event.stopPropagation();

        
});
closeButton.addEventListener('click', function(event){
	    let target = event.target;
	    hamburgerButton.classList.remove('button-close');
	    target.classList.remove('button-open');
	    menu.classList.remove("menu-open");

})