class Tab{
    constructor(tab){
        this.tab = tab;
        this.data = this.tab.dataset.tab;
        this.selectedTab = document.querySelector(`.button[data-tab = "${this.data}"]`)


        this.selectedTab = new TabContent(this.data);

        this.tab.addEventListener('click',()=>this.select())
    }

    select(){
        document.querySelectorAll('.button').forEach(tab => tab.classList.remove('selected'))
        this.tab.classList.add('selected')

        this.selectedTab.select();
    }
}

class TabContent{
    constructor(content){
        this.content = content;
    }

    select(){
        const cards = document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('selected'))
        const cardToDisplay = document.querySelector(`.tab-content[data-tab = "${this.content}"]`)
        cardToDisplay.classList.add('selected')
    }
}

//grab all the tab elements and pass to Tab class
tabs = document.querySelectorAll('.button').forEach(tab => new Tab(tab))

class NavButton{
    constructor(button){
        this.button = button;
        this.button.addEventListener('click', ()=>this.handleClick())
    }

    handleClick(){
        document.querySelectorAll('.navigation-button').forEach(button => button.classList.toggle('active'))
        const navItems = document.querySelector('.nav-items')
        navItems.classList.toggle('active')
    }
}


const menuButton = document.querySelectorAll('.navigation-button').forEach(button => new NavButton(button))

