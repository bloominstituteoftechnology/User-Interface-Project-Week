// Page scroll when Learn More button is clicked
function learnMoreScroll() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

const learnMoreButton = document.querySelector('.learn-more');
learnMoreButton.addEventListener('click', learnMoreScroll);

// Page load to bottom
function loadBottom() {
  window.scrollTo(0, document.querySelector('html').scrollHeight);
}

window.addEventListener('load', loadBottom);