class TabNav {
    constructor(element) {
        //declare variables
        this.element = element;
        this.data = this.element.dataset.tab;
        this.itemElement = document.querySelector(`.tab[data-tab='${this.data}']`);
        this.activeTab = new ActiveTab(this.itemElement);

        //add event
        this.element.addEventListener('click', () => this.select());
    }
        //event
    select() {
        const links = document.querySelectorAll('.tab-linker');
        Array.from(links).forEach(element => element.classList.remove('active'));
        this.element.classList.add('active');
        this.activeTab.select();
    }
}
        //active Tab
 class ActiveTab {
    constructor(element) {
        this.element = element;
    }
    select() {
        const items = document.querySelectorAll('.tab');
        Array.from(items).forEach(element => element.classList.remove('active'));
        this.element.classList.add('active');
    }
}

        //Declare
 const links = document.querySelectorAll('.tab-linker').forEach(link => new TabNav(link)); 