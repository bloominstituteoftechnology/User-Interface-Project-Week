function changeIcon(show) {
  if (show) {
    document.querySelector('.collapse__button img').src =
      'img/nav-hamburger-close.png';
    document.querySelector('.collapse__content').classList.add('show');
  } else {
    document.querySelector('.collapse__button img').src =
      'img/nav-hamburger.png';
    document.querySelector('.collapse__content').classList.remove('show');
  }
}

document.querySelector('.collapse__button').addEventListener('click', () => {
  store.dispatch({
    type: 'NAVBAR_COLLAPSE_TOGGLE'
  });
});

store.subscribe(state => {
  changeIcon(!state.navbarCollapsed);
});
