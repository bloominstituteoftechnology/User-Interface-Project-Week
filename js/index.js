(function() {
      var hamburger = {
        navToggle: document.querySelector('.nav-toggle'),
        nav: document.querySelector('nav'),
        doToggle: function(e) {
          e.preventDefault();
          this.navToggle.classList.toggle('expanded');
          this.nav.classList.toggle('expanded');
        }
      };
      hamburger.navToggle.addEventListener('click', function(e) { hamburger.doToggle(e); });

      hamburger.nav.addEventListener('click', function(e) {hamburger.doToggle(e);});
    }());

var tabLinks = new Array();
var contentDivs = new Array(); 



