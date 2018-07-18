let jumboHeight = $('.jumbotron').outerHeight();
function parallax(){
    let scrolled = $(window).scrollTop();
    $('.bg').css('height', (jumboHeight-scrolled) + 'px');
}

$(window).scroll(function(e){
    parallax();
});