// JS goes here

class ServiceLink {
    constructor(element){
        this.element = element;
        console.log(this.element);
        

        //getting data from item
        this.data = this.element.dataset.link;
        console.log(this.data);

        this.itemElement = document.querySelector(`.service-items .service-item[data-link='${this.data}']`);
        console.log(this.itemElement);

        this.linkItem = new LinkItem(this.itemElement);

        this.element.addEventListener('click', this.select.bind(this));
    }

    select() {
        // add a class to keep the button highlighted
        const links = document.querySelectorAll('.service-link');

        Array.from(links).forEach(link => link.classList.remove('service-link-selected'))

        // this.element.classList.add('service-item-selected');
        this.element.classList.add('service-link-selected');
        console.log("Inside select method")

        this.linkItem.select();
    }
};

class LinkItem {
    constructor(element){
        this.element = element;
    }

    select() {
        const items = document.querySelectorAll('.service-item');

        Array.from(items).forEach(item => item.classList.remove('service-item-selected'));

        this.element.classList.add('service-item-selected');

    }
}



links = document.querySelectorAll('.service-link').forEach(link => {
//  console.log(link);
 return new ServiceLink(link);
});


