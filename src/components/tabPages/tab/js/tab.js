function Tab(element, text) {
  this.element = element;

  this.component = document.createElement('button');
  this.component.classList.add('tab');
  this.component.innerHTML = `${text}`;
  this.element.appendChild(this.component);

  // Set tab number
  this.component.setAttribute('data-tab', Array.from(document.querySelectorAll('[data-tab]')).length);

  // Set active tab.
  if (Array.from(this.component.parentElement.children).length === 1) {
    this.component.classList.add('active');
  }


  // Tab click handler
  this.component.addEventListener('click', function() {




    // Get associated page
    const page = document.querySelector(`[data-page="${this.dataset.tab}"]`);

    // Remove active class.
    if (!page.classList.contains('active')) {
      Array.from(this.parentElement.children).forEach(function(t) {
        if (t.classList.contains('active')) {
          t.classList.remove('active');
        }
      });

      Array.from(page.parentElement.children).forEach(function(p) {
        if (p.classList.contains('active')) {
          p.classList.remove('active');
        }
      });

      // Add active class
      this.classList.add('active');
      page.classList.add('active');

    }
  });


}





export default Tab;
