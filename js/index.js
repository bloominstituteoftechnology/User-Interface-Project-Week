// JS goes here
const toggleMenu = () => {
    if (!dropDownContent.classList.contains('dropdownOpen')) {
        dropDownContent.classList.toggle('dropdownOpen');
        dropDownContent.style.display = 'block';
        console.log('click')
    } else {
        dropdownContent.classList.toggle('dropdownOpen');
        dropdownContent.style.display = 'none';
        console.log('unclick');
    }
}

// reference to drop down content element
const dropDownContent = document.querySelector('.dropdownContent');

// reference to drop down button element
const dropDownButton = document.querySelector('.dropdownButton');

// drop down button event listener
dropDownButton.addEventListener('click', (e) => {
    toggleMenu();
})










// Tab Section For Services Page
// class TabLink {
//     constructor(elem) {
//         // Individual Tabs
//         this.elem = elem;

//         // Data Attribute
//         this.data = this.elem.dataset.tab;

//         // Item Selector
//         this.itemElem = document.querySelector(`.tabs-item[data-tab = '${this.data}']`);

//     }
// }


// const links = document.querySelectorAll('.tabs-link').forEach(tab => new TabLink(tab));

