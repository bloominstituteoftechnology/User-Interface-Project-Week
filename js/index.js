let navItems = document.querySelector('.navItems');
let test = document.querySelector('.queryTest');
console.log(test);

$(document).ready(function() {
    $(".hamburger").click(function() {
        if (this.src.length === 43){
      this.src="/img/nav-hamburger-close.png";
      test.innerHTML = "hello";}


        else if (this.src.length === 49)
      this.src="/img/nav-hamburger.png";
    });
  });
  