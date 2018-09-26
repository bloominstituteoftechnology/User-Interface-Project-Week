class TabLink {
    constructor(element) {
        this.element = element

        this.data = thiss.element.dataset.tab

        this.itemElement = document.querySelector(`.tabs`)


    }
}






let links = document.querySelectorAll(".tabLink")

links = Array.from(links).map(tab => {
    new TabLink(tab)
})