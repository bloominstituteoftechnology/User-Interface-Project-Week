class TabLink {
    constructor(element) {
        this.element = element

        this.data = this.element.dataset.tab

        this.itemElement = document.querySelector(`.tabItem[data-tab="${this.data}"]`)

        this.tabItem = new TabItem(this.itemElement)

        this.element.addEventListener("click", () => {
            this.select()
        })

    }
    
    select() {
        const links = document.querySelectorAll(".tabLink")
    
        Array.from(links).forEach((link) => {
            link.classList.remove("tabLinkSelected")
        })

        this.element.classList.add("tabLinkSelected")

        this.tabItem.select()

        console.log(this.element)
        
    }
}

class TabItem {
    constructor(element) {
        this.element = element
    }

    select() {
        let content = document.querySelectorAll(".tabItem")

        Array.from(content).forEach((item) => {
            item.classList.remove("tabItemSelected")
        })

        this.element.classList.add("tabItemSelected")
    }
}


let links = document.querySelectorAll(".tabLink")

links = Array.from(links).map(tab => {
    new TabLink(tab)
})

// console.log(links)
// console.log(links[1]);

// links[1].select(); //=========================================//