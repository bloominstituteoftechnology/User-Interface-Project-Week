const component = document.querySelector('.tab-component')
const tabs = Array.from(component.querySelectorAll('.tab'))
const contents = component.querySelectorAll('.content')

tabs.forEach(tab => {
    tab.addEventListener('click', e => {
        const link = tab.children[0]
        const href = link.getAttribute('href')
        const tabContent = component.querySelector(href)

        tabs.forEach(elem => elem.classList.remove('active-tab'))
        contents.forEach(elem => elem.classList.remove('active-tab'))
    
    tab.classList.add('active-tab')
    tabContent.classList.add('active-tab')
    })
})