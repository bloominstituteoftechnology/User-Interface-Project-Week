//menu
{
    let expandette = document.querySelector('.expander');
    const hamburger = document.querySelector('.menu-button');
    const closer = document.querySelector('.closebtn');

    function openNav() {
        expandette.style.height = '100vh';
        closer.style.display = 'block';
        hamburger.style.display = 'none';
    }

    function closeNav() {
        expandette.style.height = '0vh';
        hamburger.style.display = 'block';
        closer.style.display = 'none';
    }

    hamburger.addEventListener('click', (event) => {
        this.openNav();
    });

    closer.addEventListener('click', (event) => {
        this.closeNav();
    });
}
//tabs component
{
    class TabLink {
        constructor(element) {
            this.element = element;
            this.data = this.element.dataset.tab;
            this.itemElement = document.querySelector(`.tab-content[data-tab='${this.data}']`);
            this.card = new TabCard(this.itemElement);
            this.element.addEventListener('click', () => {
                this.selectTab();
            });
        }

        selectTab() {
            const tabs = document.querySelectorAll('.tab');
            Array.from(tabs).forEach(function(tab) {
                tab.classList.remove('button-selected');
            });
            this.element.classList.add('button-selected');
            this.card.selectCard();
        }
    }

    class TabCard {
        constructor(element) {
            this.element = element;
        }
        selectCard() {
            const cards = document.querySelectorAll('.tab-content');
            Array.from(cards).forEach(function(card) {
                card.classList.remove('card-selected');
            });
            this.element.classList.add('card-selected');
        }
    }

    let tabs = document.querySelectorAll('.tab');
    tabs = Array.from(tabs).map((link) => new TabLink(link));
    tabs[0].selectTab();
}