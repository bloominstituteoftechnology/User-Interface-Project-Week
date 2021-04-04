function changeIcon(show) {
  if (show) {
    document.querySelector('.collapse__button img').src =
      'img/nav-hamburger-close.png';
    document.querySelector('.collapse__content').classList.add('show');
  } else {
    document.querySelector('.collapse__button img').src =
      'img/nav-hamburger.png';
    const content = document.querySelector('.collapse__content');
    const tl = new TimelineLite();
    tl.to(content, 0.2, { opacity: 0 }).to(content, 0.3, {
      height: 0,
      onComplete: () => {
        content.style.height = null;
        content.style.opacity = null;
        content.classList.remove('show');
      }
    });
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
