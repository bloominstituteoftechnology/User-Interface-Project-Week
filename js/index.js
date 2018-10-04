// JS goes here

// DROPDOWN

function openNav(){
    document.getElementById('nav').style.width='100%';
}
function closeNav(){
    document.getElementById('nav').style.width='0%';
}

// Service Tabs


content=document.getElementsByClassName('content');
for(i = 0; i <content.length; i++){
    content[i].style.display='none';
}

tablinks = document.getElementsByClassName('tablink');
    for(i = 0; i < tablinks.length; i++){z
        tablinks[i].style.backgroundColor = '';
}