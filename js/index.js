// JS goes here

let overlay = document.querySelector(".overlay");
let menuBtn = document.querySelector(".close-btn");




let show = document.querySelector(".showbtn");

show.addEventListener('click', function() {
overlay.style.display = "block";
})

menuBtn.addEventListener('click', function(){
overlay.style.display = "none";


})

let overlay2 = document.querySelector(".overlay2");

window.addEventListener('scroll', function(){
overlay2.style.display="block";
if (window.scrollY < 2) overlay2.style.display ="none";


})



let btn1 = document.querySelector(".prec");
let btn2 = document.querySelector(".con");
let btn3 = document.querySelector(".des");
let btn4 = document.querySelector(".sus");

let pic1 = document.querySelector(".paper");
let pic2 = document.querySelector(".construct");
let pic3 = document.querySelector(".designer");
let pic4 = document.querySelector(".sustain");

let text1 =document.querySelector(".pre-text")
let text2 =document.querySelector(".pre-text2")
let text3 =document.querySelector(".pre-text3")
let text4 =document.querySelector(".pre-text4")


btn1.addEventListener('click', function(){
pic1.style.display="block";
pic2.style.display="none";
pic3.style.display="none";
pic4.style.display="none";

text1.style.display="block";
text2.style.display="none";
text3.style.display="none";
text4.style.display="none";
})

btn2.addEventListener('click', function(){
    pic2.style.display="block";
    pic1.style.display="none";
    pic3.style.display="none";
    pic4.style.display="none";

    text2.style.display="block";
    text4.style.display="none";
    text3.style.display="none";
    text1.style.display="none";
    })

    btn3.addEventListener('click', function(){
        pic3.style.display="block";
        pic1.style.display="none";
        pic2.style.display="none";
        pic4.style.display="none";

        text3.style.display="block";
        text1.style.display="none";
        text2.style.display="none";
        text4.style.display="none";
        })

        btn4.addEventListener('click', function(){
            pic4.style.display="block";
            pic1.style.display="none";
            pic3.style.display="none";
            pic2.style.display="none";

            text4.style.display="block";
            text2.style.display="none";
            text3.style.display="none";
            text1.style.display="none";
            })
