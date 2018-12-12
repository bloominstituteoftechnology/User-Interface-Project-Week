
window.onload = function() {
    document.querySelector('.menu-button').addEventListener('click', () => {
    toggleClass(document.getElementById('.mainnav'), 'nav-open');
});
}