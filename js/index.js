let selectBackground = document.querySelectorAll('.backgroundChange')
for (let i = 0; i < selectBackground.length; i++) {
    selectBackground[i].addEventListener('click', () => {
        event.target.style.background = '#5E9FB9'
        event.target.style.color = '#FFF'
    }) 
}