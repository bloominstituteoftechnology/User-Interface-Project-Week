// Page scroll when Learn More button is clicked
function learnMoreScroll() {
  window.scrollTo({
    top: document.querySelector('.features').scrollHeight,
    behavior: 'smooth',
  });
}

const learnMoreButton = document.querySelector('.learn-more');
learnMoreButton.addEventListener('click', learnMoreScroll);

// Page load to bottom
window.onload = setTimeout(() => {
  window.scrollTo(0, document.body.scrollHeight);
}, 100);
