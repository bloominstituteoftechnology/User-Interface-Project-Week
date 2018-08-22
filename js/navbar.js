function on() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("xmarks").style.display = "block";
    document.getElementById("ham").style.display = "none";
    console.log('should display');
}

function off() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("xmarks").style.display = "none";
    document.getElementById("ham").style.display = "block";
}
