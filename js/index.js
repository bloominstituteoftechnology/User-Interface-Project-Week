//Main JS file

let nav = document.querySelector('.nav');
console.log(nav);

//
window.addEventListener('scroll',function(e){
  console.log(window.scrollY, 'y coord');
  if (window.scrollY > 0){
    nav.classList.add('scroll')
  } else {
    nav.classList.remove('scroll')
  }
})