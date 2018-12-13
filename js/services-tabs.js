class ServiceTabLink {
    constructor(serviceTabLinkElement) {
        // Assign this.tabLinkElement to the serviceTabLinkElement DOM reference
        this.element = serviceTabLinkElement;
        
        // Get the `data-tab` value from this.tabElement and store it here
        this.tabData = serviceTabLinkElement.dataset.tab;

        // Get the tab item pertaining to the current tab link
        this.tabItem = new ServiceTabItem(
            document.querySelector(
                `.services__items__content[data-tab="${this.tabData}"], `
                + `.services__items__content--selected[data-tab="${this.tabData}"]`
            )
        );

        // Add a click event that invokes this.selectTab
        this.element.addEventListener("click", e => this.selectTab(e));
    }

    // Manipulate selection of tab links
    selectTab(e) {
        // console.log(this.tabItem);

        // Get all service tab links
        const tabLinkElements = document.querySelectorAll(
            ".services__tabs__link, .services__tabs__link--selected"
        );
        
        // Get the tab link for the previously selected service
        let selectedTabLinkElement ;
        for (let i = 0; i < tabLinkElements.length; i++) {
            if (tabLinkElements[i].classList.contains("services__tabs__link--selected")) {        
                selectedTabLinkElement = tabLinkElements[i];
                break;
            }
        }

        // Get the `data-tab` value pertaining to the previously selected service
        const selectedTabData = selectedTabLinkElement.dataset.tab;

        // Get the tab item pertaining to the previously selected service
        const selectedTabItemElement = document.querySelector(
            `.services__items__content--selected[data-tab="${selectedTabData}"]`
        );

        // Deselect the previously active tab link
        selectedTabLinkElement.classList.add("services__tabs__link");
        selectedTabLinkElement.classList.remove("services__tabs__link--selected");

        // Mark the clicked tab link as selected
        this.element.classList.add("services__tabs__link--selected");
        this.element.classList.remove("services__tabs__link");

        // Function for handling selection of the corresponding tab item
        this.tabItem.selectTab(e, selectedTabItemElement);
    }
}

class ServiceTabItem {
    constructor(serviceTabItemElement) {
        // Assign this.cardElement to the cardElement DOM reference
        this.element = serviceTabItemElement;
    }

    // Manipulate selection of tab items (using their respective tab links)
    selectTab(e, selectedTabItemElement) {
        // Deselect the previously active tab item
        selectedTabItemElement.classList.add("services__items__content");
        selectedTabItemElement.classList.remove("services__items__content--selected");

        // Mark the clicked tab item as selected
        this.element.classList.add("services__items__content--selected");
        this.element.classList.remove("services__items__content");

        TweenMax.fromTo(this.element, 2, {
            opacity: 0
        }, {
            opacity: 1
        });
    }
}

document.querySelectorAll(".services__tabs__link, .services__tabs__link--selected")
        .forEach(serviceTabLink => new ServiceTabLink(serviceTabLink));