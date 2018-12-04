function navOpen() {
  let open = document.querySelector('.nav-expanded-links');
  if (open.style.display === 'none') {
    open.style.display = 'flex';
  } else {
    open.style.display = 'none';
  }
}