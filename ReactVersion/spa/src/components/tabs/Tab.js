import React from 'react';
import "../../App.css";

class Tab extends React.Component {
    constructor(props) {
        super(props);
     }
    
     componentDidMount() {
        let tab_component = document.querySelector(".tabs");
        let firstTab = new Tabs(tab_component);
     }

     componentDidUpdate() {
      let tab_component = document.querySelector(".tabs");
      let firstTab = new Tabs(tab_component);
   }

     render() {
         return (
            <div className="tabs">
      <div className="tabs-links">
        <div className="tabs-link tabs-link-selected" data-tab="1">
          Pre-Construction
        </div>
        <div className="tabs-link" data-tab="2">Construction</div>
        <div className="tabs-link" data-tab="3">Design Build</div>
        <div className="tabs-link" data-tab="4">Sustainability</div>
      </div>
      <div className="tabs-items">
        <div className="tabs-item tabs-item-selected" data-tab="1">
          <div className="tabs-item-title">Pre-Construction</div>
          <div className="tabs-item-description">
							<div className="tabs-text">
            <p>
              Completely synergize resource taxing relationships via premier
              niche markets. Professionally cultivate one-to-one customer
              service with robust ideas. Dynamically innovate resource-leveling
              customer service for state of the art customer service.
              Phosfluorescently engage worldwide methodologies with web-enabled
              technology. </p><p>Interactively coordinate proactive e-commerce via
              process-centric "outside the box" thinking. Completely pursue
              scalable customer service through sustainable potentialities.
						</p>
						</div>
						<div className="tabs-pic">
								<img src={require("../../img/services/services-tab-pre-construction-img.png")}/>
							</div>
          </div>
        </div>
        <div className="tabs-item" data-tab="2">
          <div className="tabs-item-title">Construction</div>
          <div className="tabs-item-description">
							<div className="tabs-text">
            <p>
              Completely synergize resource taxing relationships via premier
              niche markets.
              Phosfluorescently engage worldwide methodologies with web-enabled
              technology. Interactively coordinate proactive e-commerce via
              process-centric "outside the box" thinking. </p><p>Completely pursue
							scalable customer service through sustainable potentialities.
							Professionally cultivate one-to-one customer
              service with robust ideas. Dynamically innovate resource-leveling
              customer service for state of the art customer service.
						</p>
					</div>
					<div className="tabs-pic">
							<img src={require("../../img/services/services-tab-construction-img.png")}/>
						</div>
          </div>
        </div>
        <div className="tabs-item" data-tab="3">
          <div className="tabs-item-title">Design Build</div>
          <div className="tabs-item-description">
							<div className="tabs-text">
            <p>
								Interactively coordinate proactive e-commerce via
								process-centric "outside the box" thinking. Completely pursue
								scalable customer service through sustainable potentialities.Completely synergize resource taxing relationships via premier
              niche markets. </p><p>Professionally cultivate one-to-one customer
              service with robust ideas. Dynamically innovate resource-leveling
              customer service for state of the art customer service.
              Phosfluorescently engage worldwide methodologies with web-enabled
              technology. 
						</p>
					</div>
					<div className="tabs-pic">
							<img src={require("../../img/services/services-tab-design-build-img.png")}/>
						</div>
          </div>
        </div>
        <div className="tabs-item" data-tab="4">
          <div className="tabs-item-title">Sustainability</div>
          <div className="tabs-item-description">
						<div className="tabs-text">
								<p>
										Completely synergize resource taxing relationships via premier
										niche markets. Phosfluorescently engage worldwide methodologies with web-enabled
										technology. Interactively coordinate proactive e-commerce via
										process-centric "outside the box" thinking. </p><p>Professionally cultivate one-to-one customer
										service with robust ideas. Dynamically innovate resource-leveling
										customer service for state of the art customer service.
										Completely pursue
										scalable customer service through sustainable potentialities.
									</p>
						</div>
						<div className="tabs-pic">
							<img src={require("../../img/services/services-tab-sustainability-img.png")}/>
						</div>
          </div>
        </div>
      </div>
    </div>
         )
     }
}

export default Tab;

class Tabs {
    constructor(element) {
      this.element = element;
      // grab the tabs-link nodes
      this.links = this.element.querySelectorAll(".tabs-link");
      // Make a new TabLink for each node
      this.links = this.links.forEach( link => new TabLink(link))
    }
  }
  
  class TabLink {
    constructor(element) {
      // Assign this.element to the passed in DOM element
      this.element = element;
      
      // Get the custom data attribute on the Link
      this.data = this.element.dataset.tab;
      
      // Using the custom data attribute get the associated Item element
      this.itemElement = document.querySelector(`.tabs-item[data-tab="${this.data}"]`);
      
      // Using the Item element, create a new instance of the TabItem class
      this.tabItem = new TabItem(this.itemElement);
      
      // Add a click event listener on this instance, calling the select method on click
      this.element.addEventListener("click", () => {
        this.select();
        this.deselect();
      });
    };
  
    select() {
      // Call the select method on the item associated with this link
      this.tabItem.deselect();
      this.tabItem.select();
  
    }
  
    deselect() {
      // Get all of the elements with the tabs-link class
      //let links = document.querySelector(".tabs-link"); redeclaration breaks the functionality?
      let links = document.querySelectorAll(".tabs-link");
      Array.from(links).forEach( item => item.classList.remove("tabs-link-selected"));
  
      // Add a class named "tabs-link-selected" to this link
      this.element.classList.add("tabs-link-selected");
    }
  }
  
  
  
  class TabItem {
    constructor(element) {
      // Assign this.element to the passed in element
      this.element = element;
    }
  
    select() {
  
      // Add a class named "tabs-item-selected" to this element
      this.element.classList.add("tabs-item-selected");
    }
  
    deselect() {
      // Select all ".tabs-item" elements from the DOM
      const items = document.querySelectorAll(".tabs-item");
  
      // Remove the class "tabs-item-selected" from each element
      Array.from(items).forEach( item => item.classList.remove("tabs-item-selected"));
    }
  }