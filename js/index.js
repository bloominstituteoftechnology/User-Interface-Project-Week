let onHumburger = document.querySelector('.on-humburger');
let offHumburger = document.querySelector('.off-humburger');
let hiddenNavigation = document.querySelector('.hidden-navigation');

onHumburger.addEventListener('click', function(e) {
  onHumburger.classList.add('hidden');
  offHumburger.classList.remove('hidden');

  hiddenNavigation.classList.remove('hidden');
  hiddenNavigation.classList.add('expanded');
});

offHumburger.addEventListener('click', function(e) {
  onHumburger.classList.remove('hidden');
  offHumburger.classList.add('hidden');

  hiddenNavigation.classList.add('hidden');
  hiddenNavigation.classList.remove('expanded');
});