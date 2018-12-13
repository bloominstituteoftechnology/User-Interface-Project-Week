
let myIndex = 0;
carousel()
function carousel(){
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
     }
     myIndex++;
     if(myIndex > slides.length) {myIndex = 1}
     slides[myIndex-1].style.display = 'block';
     setTimeout(carousel, 4000)
}