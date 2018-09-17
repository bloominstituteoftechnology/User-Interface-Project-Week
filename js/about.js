function about() {

    let showFlg = false;
    let timer = "";
    let transitionFlg = false;
    let index2 = 0;
    
    const menuButton = document.querySelector(".menu-button");
    menuButton.addEventListener("click", clickMenu);
    
    const navButton = document.querySelector(".nav-button");
    navButton.addEventListener("click", clickMenu);
    
    const formInput2 = document.querySelector(".input2");
    formInput2.addEventListener("click", inputFocus2);
    
    let menu = document.querySelector(".nav");

    function clickMenu() {
        menu.classList.toggle("nav-open");
        menuButton.classList.toggle("menu-button-close");
    }

    function inputFocus2() {
        // clears the input for the user to type their email
        if (formInput2.value === "Enter Email:") {
            formInput2.value = "";
        }
    }

    class Carousel {
        constructor(element) {
            this.element = element;
            this.rightBtn = document.querySelector(".right-button");
            this.leftBtn = document.querySelector(".left-button");
            
            this.images = document.querySelectorAll(".carousel img");
            
            this.rightBtn.addEventListener("click", () => { this.selectRight() });
            this.leftBtn.addEventListener("click", () => { this.selectLeft() });
            
            this.controlButton = document.querySelector(".control-button");
            this.controlButton.addEventListener("click", () => { this.showStart() });
            
            this.optionsButton = document.querySelector(".options-button");
            this.optionsButton.addEventListener("click", () => { this.showTransition() });
            
            this.optionsAudio = document.querySelector(".options-audio");
            this.optionsAudio.addEventListener("click", () => { this.beginAudio() }); 
        }
        selectRight() {
            index2 < 5 ? index2 += 1 : index2 = 0; 
                   
            this.images.forEach(function (item) {
                item.style.display = "none"
            });
            this.images[index2].style.display = "flex";
            if (transitionFlg) {
                this.images[index2].classList.add("image-fade");
            }

        }
        selectLeft() {
            index2 > 0 ? index2 -= 1 : index2 = 5; 
          
            this.images.forEach(function (item) {
                item.style.display = "none"
            });
            this.images[index2].style.display = "flex"
            if (transitionFlg) {
                this.images[index2].classList.add("image-fade");
            }
        }
        showStart() {
            if (showFlg) {
                clearInterval(timer);
                showFlg = false;
                this.controlButton.innerHTML = "Click Here to Start";
            } else {
                let delay = (document.querySelector("#slider-range").value * 1000);
                this.controlButton.innerHTML = "Click Here to Stop";
                showFlg = true;
                timer = setInterval(() => { this.beginShow() }, delay);
            }
        }
        beginShow() {
            this.selectRight();
        }
        showTransition() {
            if (transitionFlg) {
                this.optionsButton.innerHTML = "Click to Enable";
                transitionFlg = false;
            } else {
                transitionFlg = true;
                this.optionsButton.innerHTML = "Click to Disable";
            }
        }
        beginAudio() {
            if ( this.optionsAudio.innerHTML === "Click Here to Start") {
                this.optionsAudio.innerHTML = "Click Here to Stop";
                togglePlay();
            }  else {
                this.optionsAudio.innerHTML = "Click Here to Start";
                togglePlay();
            }    
        }
    }

    let carousel = document.querySelectorAll(".carousel");

    carousel = Array.from(carousel).map(item => new Carousel(item))
}

about();