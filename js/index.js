// JS goes here
console.log('im working')

/*function display() {
  var imgChange = document.getElementsByClassName('hover');

  imgChange.style.display = 'none'


}*/




function dropTheMenu() {
    //document.getElementById('drop-menu').style.display = 'flex';
    document.getElementById('drop-menu').classList.toggle('drop-menu')



    document.getElementById('drop-menu').style.position = ('absolute')
    document.getElementById('drop-menu').style.width = ('100%')
    document.getElementById('drop-menu').style.border = ('1px solid black')
    document.getElementById('drop-menu').style.width = ('100%')
    document.getElementById('drop-menu').style.maxWidth = ('900px')
    document.getElementById('drop-menu').style.zindex('5')

    //var x = document.getElementById('drop-menu');
    //var y = x.getElementsByTagName('li')
}





function construction() {

  if(document.getElementById('one').style.display == 'none')
    document.getElementById('one').style.display = 'flex';
  else {
    document.getElementById('one').style.display = 'none'
  }
}

function preConstruction() {
  if(document.getElementById('two').style.display == 'none')
    document.getElementById('two').style.display = 'flex';
  else {
    document.getElementById('two').style.display = 'none'
  }

}
function designBuild() {
  if(document.getElementById('three').style.display == 'none')
    document.getElementById('three').style.display = 'flex';
  else {
    document.getElementById('three').style.display = 'none'
  }

}
function sustainability() {
  if(document.getElementById('four').style.display == 'none')
    document.getElementById('four').style.display = 'flex';
  else {
    document.getElementById('four').style.display = 'none'
  }

}
