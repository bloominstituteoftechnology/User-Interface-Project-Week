var state = {
    tabLinks: document.querySelectorAll('.topics .tab'),
    cards: document.querySelectorAll('.card')
  };

  var nodesArray = [].slice.call(document.querySelectorAll(".cards-container"));
  var cards = document.getElementById("debug");

// Get all buttons with class="btn" inside the container
var tab = cards.getElementsByClassName(".cards-container");
  console.log(nodesArray)
  // event listener
  function updateActive(filter) {
    
    state.tabLinks.forEach(function(link) {
        console.log("link",link);
      if (link.dataset.tab === filter) {
          console.log(filter);
        link.classList.add('active-tab');
      } else {
        link.classList.remove('active-tab');
      }
    });
    
    state.cards.forEach(function(card) {
      // if all is selected, just clear the display property for all the cards. 
      if (filter === 'All') {
        card.style.display = null;
        return;
      }
      // never reaches here if all was selected
      
      if (card.dataset.tab === filter) {
        card.style.display = null;
      } else {
        card.style.display = "none";
      }
    });
  }
  
  // set up event listener
  state.tabLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      updateActive(link.dataset.tab);
      console.log(link.dataset.tab);
    });
  });