const inputB = document.querySelector('.input-block');
const thankB = document.querySelector('.thank-block')
const thankT = thankB.querySelector('h3');
const thankC = thankB.querySelector('i');

function handleEmail(event) {
  if(event.key === 'Enter'){
    inputB.style.display = 'none';
    thankB.style.display = 'flex';
    TweenMax.from(thankT, .5, {x: -20, opacity: 0});
    TweenMax.from(thankC, .5, {y: -40, opacity: 0, delay: .2});
  }
}