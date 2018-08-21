const toggleMenu = () => {
    header.classList.toggle('header-open')
    header.classList.toggle('opacity-on')
    links.classList.toggle('on')
    links.classList.toggle('opacity-on')
    dropButton.style.display = 'none'
    dropButton2.style.display = 'block'
  }

  const toggleoff = () => {
    dropButton2.style.display = 'none'
    dropButton.style.display = 'block'
    header.classList.toggle('header-open')
    header.classList.toggle('opacity-on')
    links.classList.toggle('on')
    links.classList.toggle('opacity-on')
  }

  
  
  // class reference
  const header= document.querySelector('header');
  const links= document.querySelector('.links');
 
  
  
  // button reference
  const dropButton = document.querySelector(".drop-button");
  const dropButton2 = document.querySelector(".drop-button2");
  
  // click and toggle
  
  dropButton.addEventListener('click', toggleMenu);
  dropButton2.addEventListener('click', toggleoff);
