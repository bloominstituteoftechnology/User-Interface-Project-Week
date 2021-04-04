// JS goes here
store.subscribe(state => {
  console.log(state);
});

// store.dispatch({
//   type: 'NAVBAR_COLLAPSE_TOGGLE'
// });

// store.dispatch({
//   type: 'UPDATE_ACTIVE',
//   activeTabNumber: 3
// });

let targets = document.querySelectorAll('.scroll-fade');

window.addEventListener('scroll', () => {
  const windowBottom = window.scrollY + window.innerHeight;

  targets.forEach(target => {
    if (target.classList.contains('scroll-fade--show')) return;
    const targetMiddle = target.offsetTop + target.offsetHeight / 2;

    if (targetMiddle < windowBottom) {
      target.classList.add('scroll-fade--show');
    }
  });
});
