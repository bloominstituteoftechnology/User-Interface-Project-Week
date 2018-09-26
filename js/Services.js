 // Activate the content with CSS style
 active(){
    //Grab all the tab lins and remove the CSS style if its there
    const links = document.querySelectorAll('.tab-link');
    Array.from(links).map(link => link.classList.remove('tab-link-selected'));

    // Toggle new link with the css style
    this.link.classList.toggle('tab-link-selected');

   //Show which content is selected
    this.tabItem.active();
}