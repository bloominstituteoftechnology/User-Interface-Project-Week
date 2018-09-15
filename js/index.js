// JS goes here

const btnHambourger = document.querySelector('.nav-top--btn'),
       navMenu = document.querySelector('.nav ul');
       


btnHambourger.addEventListener('click', ()=>{
        this.event.target.classList.toggle('close');
        this.event.target.classList.toggle('open');
        navMenu.classList.toggle('nav--links__open');
        
    }


)