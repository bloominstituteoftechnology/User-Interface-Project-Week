// JS goes here
function toggleOverlay(){
	var overlay = document.getElementById('overlay');
	var specialBox = document.getElementById('specialBox');

	if(overlay.style.display == "block"){
		overlay.style.display = "none";
        specialBox.style.display = "none"; 
        content.style.display = "block"
	} else {
		overlay.style.display = "block";
        specialBox.style.display = "block";
        content.style.display = "none"
	}
}