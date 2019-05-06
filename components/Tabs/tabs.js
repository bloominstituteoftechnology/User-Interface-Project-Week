class Tab {
    constructor(element) {
        this.element = element;
        this.data = this.element.dataset.tab;
        this.header = document.querySelector(`.tab-header[data-tab="${this.data}"]`);
        this.img = document.querySelector(`.tab-content-img[data-tab="${this.data}"]`);
        
        this.element.addEventListener('click', () => this.tabClick());
    }

    tabClick() {
        //shows tab button active
        const tabs = document.querySelectorAll('.tab-button');
        tabs.forEach((tab) => {
            tab.classList.remove('active');
        });
        this.element.classList.add('active');

        //shows corresponding img
        const images = document.querySelectorAll('.tab-content-img');
        images.forEach((image) => {
            image.style.display = 'none';
        })
        this.img.style.display = "flex";

        //shows corresponding header
        const headers = document.querySelectorAll('.tab-header');
        headers.forEach((header) => {
            header.style.display = 'none';
        })
        this.header.style.display = "flex";

    }
}

let tabs = document.querySelectorAll('.tab-button');
tabs = Array.from(tabs).map((tab) => new Tab(tab));

tabs[0].tabClick();