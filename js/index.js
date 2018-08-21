let navBtn = document.querySelector('.btn-nav');
let overlay = document.querySelectorAll('.overlay');

let navClose = document.querySelector('.btn-close');

navBtn.addEventListener('click', function(){
	overlay[0].classList.add('show-nav');
	navBtn.style.display = "none";
	navClose.style.display = "block";
});

navClose.addEventListener('click', function(){
	overlay[0].classList.remove('show-nav');
	navBtn.style.display = "block";
	navClose.style.display = "none";
});



