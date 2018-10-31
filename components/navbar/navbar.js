let openClose = document.querySelectorAll('.navbar img');
let nav = document.querySelector('nav');

openClose.forEach(item => item.addEventListener('click', () => nav.classList.toggle('active')));
