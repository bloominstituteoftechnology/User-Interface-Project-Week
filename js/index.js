// JS goes here
 var menuItems = document.querySelectorAll(".services-content-menu li");
 console.log(menuItems)
var innerContent = document.querySelectorAll(".services-inner-content");
console.log(innerContent);

menuItems.forEach(function (button,index){


  button.addEventListener("click", function(){
    if(button.dataset.content == "false"){
      // add hidden attr to all content
      console.log(index);
      innerContent.forEach(element => element.setAttribute("hidden", "true"));
      // make content = true
      button.dataset.content == "true"
      //show content by removing hidden attr
       innerContent[index].removeAttribute("hidden");
    }
  })
});
