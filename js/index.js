class TabItem {
    constructor(link) {
        this.link = link;
        this.linkId = this.link.dataset.tab;
        this.linkItem = document.querySelector(`.tab-item[data-tab='${this.linkId}']`);
        this.link.addEventListener('click', (e) => {
            this.renderTab(e);
            this.linkId = e.target.linkId;
        });

    }


    renderTab(e) {
        let tabitems = document.querySelectorAll('.tab-item');
        tabitems.forEach(item => item.classList.add('hide'));
        this.linkId = e.target.linkId;
        this.linkItem.classList.remove('hide');

    }


}






let links = document.querySelectorAll('.tab-link');
links = Array.from(links).map(link => new TabItem(link));