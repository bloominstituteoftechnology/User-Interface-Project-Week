// JS goes here

// Navigation - Expandable Menu

const toggleMenu = () => {
    // menu.classList.toggle('menu--open');
     if(menu.className.includes("menu--open")) {
       
        menu.classList.remove("menu--open");
        TweenLite.to(menu, 1, { 
          ease: Circ.easeOut, 
          height: 50
        });

       
      } else {
        menu.classList.add("menu--open");
        TweenLite.set(".menu--open", {clearProps:"all"})
        TweenLite.from(menu, 1, { 
          ease: Circ.easeOut, 
          height: 50
        });

       }
    
  }

  const collapseButton = () => {
   // TweenLite.to()
    menuButton.style.display = "none";
    //move rapidly up and out
    menuClose.style.display = "block";
    //move rapidly up and in
  }

  
  const expandButton = () => {
    menuButton.style.display = "block";
    //rapidly move up and in
    menuClose.style.display = "none";
    //rapidly move up and out
  }
  
  
  const menu = document.querySelector('.navbar');

  const menuClose = document.querySelector('.menu-close');
  const menuButton = document.querySelector('.menu-button');
 
  menuButton.addEventListener('click', () => {
    toggleMenu();
    collapseButton();
});

menuClose.addEventListener('click', () => {
    toggleMenu();
    expandButton();
});





// class NavLink {
//   constructor(link) {
//     this.link = link;

//     this.link.addEventListener('click', () => { this.select() });

//     select(){
//       const links = document.querySelectorAll('.nav-links');

      
//     }
    
//   }
// }

// const navlinks = document.querySelectorAll('.nav-links');

// navlinks = Array.from(navlinks).map( link => new NavLink(link));

//grab all nav-links

//when a nav-link is clicked, it zooms to right
//then menu collapses
 
//


/* <html>
<h2>Navigate to URL</h2>
<script>
function navigateToURL() {
window.location.href = "http://www.roseindia.net";
}
</script>
<a href="#" onclick="navigateToURL();">Click here to Navigate RoseIndia home page</a>
</html> */

function navigateHome() {
  window.location.href = "./index.html";
}

function navigateServices() {
    window.location.href = "./services.html";
}

const animateServicesNav = () => {
  setTimeout(
    navigateServices, 2000
  )
}
