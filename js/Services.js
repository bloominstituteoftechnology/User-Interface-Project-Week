 
 
 
 
 
 



 


//Get all the tab links
let links = document.querySelectorAll('.tab-link');
links = Array.from(links).map((link) => new TabLink(link));

//Create the index for the first item to stay selected
links[0].active();