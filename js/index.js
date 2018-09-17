// JS goes here
const tabs1  = document.querySelectorAll('.tabs1')
tabs1.forEach(function(element){
    element.addEventListener('click', function(event){
        const tabContent = document.querySelectorAll('.row')
        const selectedTab = event.currentTarget
        const tabs = document.querySelectorAll('.tabs1')
        tabs.forEach(function(tab){
            if(selectedTab === tab){
                tab.classList.add('selected')
            }
            else{
                tab.classList.remove('selected')
            }
        

        })

        tabContent.forEach(function(content){
            
           const tabNumber = selectedTab.dataset.tab
           const contentNumber = content.dataset.content
        //    current tab
           if (tabNumber === contentNumber){
           
    
            content.classList.remove('hide')
           }
        //    not selected tabs
           else {
               content.classList.add('hide')
           }
        })
    }) 
})

const navIcons = document.querySelectorAll('nav img')
navIcons.forEach(function(image){
    image.addEventListener('click', function(event){
        const dropDown = document.querySelector('.dropdown-menu')
        dropDown.classList.toggle('hide')
        navIcons.forEach(function(button){
            button.classList.toggle('hide')
        })
    })

})