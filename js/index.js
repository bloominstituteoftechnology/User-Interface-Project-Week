//Overlay menu
const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');

function openMenu(){
  document.querySelector('.overlay').style.display = 'block';
  console.log("open works");
}

function closeMenu(){
  document.querySelector('.overlay').style.display = 'none';
  console.log("close works");
}

openBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);
