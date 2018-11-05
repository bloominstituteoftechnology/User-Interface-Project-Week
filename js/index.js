class TabLink {
    constructor(element) {
        this.element = element;
        this.data = this.element.dataset.tab;
        this.itemElement = document.querySelector(`.tab-content[data-tab='${this.data}']`);
        this.tabItem = new TabItem(this.itemElement);

        this.element.addEventListener('click', () => {
            this.select()
        });

        // console.log(this.element);
    }

    select() {
        const tlinks = document.querySelectorAll('.tabs');

        tlinks.forEach(tlink => tlink.classList.remove('tab-selected'));

        this.element.classList.add('tab-selected');
        // console.log(this.element);

        this.tabItem.select();
        // console.log(this.tabItem);
    }

    linkClick() {
        this.tabItem.toggleContent();
    }

}

class TabItem {
    constructor(tabContent) {
        this.tabContent = tabContent;
        // console.log(tabContent);
    }
    select() {
        let items = document.querySelectorAll('.tab-content');
        // console.log(items);

        items.forEach(item => {
            item.classList.remove('tab-selected');
        });

        this.tabContent.classList.add('tab-selected');
        console.log(this.tabContent);
    }
    toggleContent() {
        this.tabContent.toggle('change');
        console.log(this.tabContent);
    }

}


let tlinks = document.querySelectorAll('.tabs');
// console.log(tlinks);
tlinks = Array.from(tlinks).map(tlink => new TabLink(tlink));
tlinks[0].select();


/* Navigation */
// class OpenNav {
//     constructor(link) {
//         this.navLink = link;
//         this.openLink = document.querySelector('open-nav');
//         this.closeLink = document.querySelector('close-nav');

//         this.navLink.addEventListener('click', () => this.open());
//         console.log(this.navLink);
//     }

//     open() {
//         this.openLink.classList.toggle('nav-selected');
//         this.closeLink.classList.toggle('nav-selected');

//         navLink.classList.toggle('navShow');
//     }
// }

// class CloseNav {
//     constructor(link) {
//         this.linkClose = link;
//         this.openLink = document.querySelector('open-nav');
//         this.closeLink = document.querySelector('close-nav');

//         this.linkClose.addEventListener('click', () => this.close());
//         console.log(this.linkClose);
//     }

//     close() {
//         this.openLink.classList.toggle('nav-selected');
//         this.closeLink.classList.toggle('nav-selected');

//         navLinks.classList.toggle('navShow');
//     }
// }

// let navOpen = document.querySelector('.open-nav');
// let navClose = document.querySelector('close-nav');
// let navLinks = document.querySelector('navShow');

// navOpen = new OpenNav(navOpen);
// navClose = new CloseNav(navClose);

// let email = document.querySelector(".email");

// email.addEventListener("input", () => {
//     if (email.validity.typeMismatch) {
//         email.setCustomValidity("Email is expected!");
//     } else {
//         email.setCustomValidity("Thank you for submitting!");
//     }
// });