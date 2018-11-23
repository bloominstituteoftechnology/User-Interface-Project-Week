var tl = new TimelineMax();
const servicesContainer = document.querySelector('.services-container');

class ServiceLink {
    constructor(serviceLinkElement) {
        this.serviceLinkElement = serviceLinkElement;

        // Reference this service Links's data-set-tab to linkData variable 
        this.linkData = this.serviceLinkElement.dataset.tab;
        
        // Reference the Service Panel by query using linkData
        this.servicePanelElement = document.querySelector(`.services-container .services-panel[data-tab="${this.linkData}"]`);
    
        // Create new Service Panel object using the above reference servicePanel
        this.newPanelElement = new ServicePanel(this.servicePanelElement);

        this.serviceLinkElement.addEventListener('click', () => 
            // Loop through all serviceLink and add method select defined below
            this.select()
        );
    };

    select() {
        
        const links = document.querySelectorAll('.services-links .services-link');
        
        // Loop through links and remove selected css
        links.forEach(link => 
            link.classList.remove('services-link-selected')
        );
        
        // Add selected css to this Service Link
        this.serviceLinkElement.classList.toggle('services-link-selected');
        
        // Invoke this new Panel Element's select method 
        this.newPanelElement.select();
    }
}

class ServicePanel {
    constructor(servicePanelElement) {
        this.servicePanelElement = servicePanelElement;
        this.servicePanelHeight =  this.servicePanelElement.offsetHeight;
    }
  
    // Select Panel Method
    select() {

        const servicePanels = document.querySelectorAll(`.services-panels .services-panel`);
        
        // Loop through links and remove selected css
        servicePanels.forEach(servicePanel => 
            servicePanel.classList.remove('services-panel-selected')
        );
      
        // Add a class named "services-panel-selected" to this element
        this.servicePanelElement.classList.toggle('services-panel-selected');
        
        // Add rotating 
        tl.from(this.servicePanelElement, .33, {opacity: 0, scale: 0, rotation: -720, ease:Bounce});
        

        if (window.innerWidth < 560) {
            window.scroll(1000, 650);
        } else {
            window.scroll(1300, 350);
        }
    }
}
  
  /* START HERE: 
  
  - Select all classes named ".tabs-link" and assign that value to the links variable
  
  
  - With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList
  
  - In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter
  
  */
  
serviceLinks = document.querySelectorAll('.services-link')
.forEach(serviceLink=>{
new ServiceLink(serviceLink)
});