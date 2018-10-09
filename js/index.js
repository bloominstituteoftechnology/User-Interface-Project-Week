// JS goes here

// DROPDOWN

function openNav(){
    document.getElementById('nav').style.width='100%';
}
function closeNav(){
    document.getElementById('nav').style.width='0%';
}

// Service Tabs
function opentab(evt, id) {
    
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(id).style.display = "block";
    evt.currentTarget.className = " active";
}