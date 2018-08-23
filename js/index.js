let navBtn = document.querySelector('.btn-nav');
let overlay = document.querySelectorAll('.overlay');
let navClose = document.querySelector('.btn-close');

navBtn.addEventListener('click', showNav);

function showNav(){
	overlay[0].classList.remove('hide-nav')
	overlay[0].classList.add('show-nav');
	navBtn.style.display = "none";
	navClose.style.display = "block";
}

navClose.addEventListener('click', function(){
	overlay[0].classList.add('hide-nav');
	navBtn.style.display = "block";
	navClose.style.display = "none";
	setTimeout(function(){ overlay[0].classList.remove('show-nav') }, 1500);
	navBtn.removeEventListener("click", showNav);
	setTimeout(function(){navBtn.addEventListener('click', showNav)}, 1500);
});


// -----------------------------------------------------------
