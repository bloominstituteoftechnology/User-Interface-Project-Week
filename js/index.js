// JS goes here

function openNav() {
    document.getElementById("myNav").style.height = "100%";
}
  
function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}





function precon() {
    document.getElementById("precon").style.display = "flex";
    document.getElementById("cons").style.display ="none";
    document.getElementById("desi").style.display ="none";
    document.getElementById("sust").style.display ="none";

    document.getElementById("yo1").style.color="white";
    document.getElementById("yo1").style.backgroundColor="#5E9FB9"
    document.getElementById("yo2").style.color="black";
    document.getElementById("yo2").style.backgroundColor="white"
    document.getElementById("yo3").style.color="black";
    document.getElementById("yo3").style.backgroundColor="white"
    document.getElementById("yo4").style.color="black";
    document.getElementById("yo4").style.backgroundColor="white"
}

function cons() {
    document.getElementById("precon").style.display = "none";
    document.getElementById("cons").style.display ="flex";
    document.getElementById("desi").style.display ="none";
    document.getElementById("sust").style.display ="none";

    document.getElementById("yo2").style.color="white";
    document.getElementById("yo2").style.backgroundColor="#5E9FB9"
    document.getElementById("yo1").style.color="black";
    document.getElementById("yo1").style.backgroundColor="white"
    document.getElementById("yo3").style.color="black";
    document.getElementById("yo3").style.backgroundColor="white"
    document.getElementById("yo4").style.color="black";
    document.getElementById("yo4").style.backgroundColor="white"
}

function desi() {
    document.getElementById("precon").style.display = "none";
    document.getElementById("cons").style.display ="none";
    document.getElementById("desi").style.display ="flex";
    document.getElementById("sust").style.display ="none";

    document.getElementById("yo3").style.color="white";
    document.getElementById("yo3").style.backgroundColor="#5E9FB9"
    document.getElementById("yo1").style.color="black";
    document.getElementById("yo1").style.backgroundColor="white"
    document.getElementById("yo2").style.color="black";
    document.getElementById("yo2").style.backgroundColor="white"
    document.getElementById("yo4").style.color="black";
    document.getElementById("yo4").style.backgroundColor="white"
}

function sust() {
    document.getElementById("precon").style.display = "none";
    document.getElementById("cons").style.display ="none";
    document.getElementById("desi").style.display ="none";
    document.getElementById("sust").style.display ="flex";

    document.getElementById("yo4").style.color="white";
    document.getElementById("yo4").style.backgroundColor="#5E9FB9"
    document.getElementById("yo1").style.color="black";
    document.getElementById("yo1").style.backgroundColor="white"
    document.getElementById("yo2").style.color="black";
    document.getElementById("yo2").style.backgroundColor="white"
    document.getElementById("yo3").style.color="black";
    document.getElementById("yo3").style.backgroundColor="white"
}