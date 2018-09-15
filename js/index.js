// JS goes here
document.querySelector('.hamburger').addEventListener('click', () => openNav());
document.querySelector('.cross').addEventListener('click', () => closeNav());

function openNav() {
  document.querySelector('.hamburger').classList.add('hidden');
  document.querySelector('.cross').classList.remove('hidden');
  document.querySelector('.navigation').classList.add('modal');
  document.querySelector('.navLinks').classList.remove('hidden');
  document.querySelector('.navigation').style.justifyContent = 'center';
}

function closeNav() {
  document.querySelector('.hamburger').classList.remove('hidden');
  document.querySelector('.cross').classList.add('hidden');
  document.querySelector('.navigation').classList.remove('modal');
  document.querySelector('.navLinks').classList.add('hidden');
  document.querySelector('.navigation').style.justifyContent = 'space-between';
}