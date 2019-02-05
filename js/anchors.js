// Load page to the bottom
function loadBottom() {
  window.scrollTo(0, document.querySelector('html').scrollHeight);
}

window.addEventListener('DOMContentLoaded', loadBottom);

// Page scroll when Learn More button is clicked
function learnMore() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

const learnMoreButton = document.querySelector('.learn-more');

learnMoreButton.addEventListener('click', learnMore);
