class NavButton {
    constructor(element) {
        this.element = element;
        this.element.addEventListener('click', () => this.navigator());
    }
    navigator() {
        let nav = document.querySelector('.navigation');
        nav.classList.toggle('navigation-open');
        let open = document.querySelector('.open-menu');
        open.classList.toggle('closed');
        let closedMenu = document.querySelector('.close-menu');
        closedMenu.style.display === 'block' ? closedMenu.style.display = '' : closedMenu.style.display = 'block';
    }
}

let navButttons = document.querySelectorAll('.change');

navButttons = Array.from(navButttons).map( navButton => new NavButton(navButton));