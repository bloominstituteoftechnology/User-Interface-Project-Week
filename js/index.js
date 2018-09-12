// JS goes here

class Header{
    constructor(header){
        this.element = header ;
        // this.item = document.querySelectorAll('.header');
        this.element.style.fontSize = '2.8rem';
        this.element.style.fontWeight = 'Bold';
        console.log(this.item);
        this.element.style.fontFamily = 'Roboto';
    }
}


let headers = document.querySelectorAll('.header');
headers = Array.from(headers).map(header => new Header(header))
console.log(headers);