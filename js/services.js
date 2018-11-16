class ServiceLink {
    constructor(serviceLinkElement) {
        this.serviceLinkElement = serviceLinkElement;

        this.panelData = this.serviceLinkElement.dataset.tab;
        
        this.servicePanelElement = document.querySelector(`.services-tabs .services-item[data-tab="${this.panelData}"]`);
    
        this.newPanelElement = new ServicePanel(this.servicePanelElement);
        this.serviceLinkElement.addEventListener('click', () => {
            this.select()
        });
    };
    select() {

        const links = document.querySelectorAll('.services-links .services-link');

        links.forEach(link => 
            link.classList.remove('services-link-selected')
        );

        this.serviceLinkElement.classList.toggle('services-link-selected');
        
        this.newPanelElement.select();
    }
}
class ServicePanel {
    constructor(ServicePanelElement) {
      this.ServicePanelElement = ServicePanelElement;
    }
  
    select() {
      const ServicePanels = document.querySelectorAll('.services-items .services-item');

      Array.from(ServicePanels).forEach(ServicePanel => 
          ServicePanel.classList.remove('services-item-selected')
      );
      
      // Add a class named "services-item-selected" to this element
      // console.log(this.item);
      this.ServicePanelElement.classList.toggle('services-item-selected');
    }
  }
  
  /* START HERE: 
  
  - Select all classes named ".tabs-link" and assign that value to the links variable
  
  
  - With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList
  
  - In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter
  
  */
  
serviceLinks = document.querySelectorAll('.services-link')
.forEach(serviceLink=>{
// console.log(serviceLink)
new ServiceLink(serviceLink)
});