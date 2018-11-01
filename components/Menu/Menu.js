
    const toggleMenu = () => { 
      openMenu.classList.toggle('btn-toggle');
      closedMenu.classList.toggle('btn-toggle');
      console.log("should have worked");
    }
  
  
  const menu = document.querySelector('.menu');
  const button= document.querySelector('.menu-button');
  const closeButton= document.querySelector('.close-button')
  const closedMenu= document.querySelector('.btn-close');
  const openMenu= document.querySelector('.btn-open');
 
  

  closeButton.addEventListener('click', event => toggleMenu(event));
  button.addEventListener('click', event => toggleMenu(event));

  
  
