let navbar = document.querySelector('.navbar');

window.addEventListener('scroll', ()=>{
	console.log('scrolling')
	navbar.style.background = '#777';
	navbar.style.opacity = '.95';
})

navbar.addEventListener('click', ()=> {
	console.log(`i've been clicked`)
})