class TabLink {
    constructor (link) {
        // Associate
        this.link = link;
        // Get data info
        this.data = this.link.dataset.tab;
        // Get associated item using data and query selector only
        this.tabData = document.querySelector(`.tab-link-data[data-tab="${this.data}"]`);
        console.log(`BEFORE: ${this.tabData}`);

        this.tabHeader = this.link.innerHTML;
        console.log(`${this.tabHeader}`)
        // Create a new object from tabData
        this.tabData = new TabData(this.tabData);
        console.log(`AFTER: ${this.tabData}`)
        // Associate a click event when the link is clicked
        this.link.addEventListener('click', () => this.select());
    }

    select() {
        const links = document.querySelectorAll('.tab-link');
        Array.from(links).forEach(item => item.classList.remove('selected'));
        
        const headers = document.querySelectorAll('.left h2');
        Array.from(headers).forEach(item => item.innerHTML = this.tabHeader);
        this.link.classList.add('selected');
        this.tabData.select();
    }
}

class TabData {
    constructor (data) {
        this.data = data;
    }

    select() {
        const tabData = document.querySelectorAll('.tab-link-data');
        Array.from(tabData).forEach(item => item.classList.remove('selected'));
        this.data.classList.add('selected');
    }
}

let links = document.querySelectorAll('.tab-link');
links = Array.from(links).map(link => new TabLink(link));
links[0].select();