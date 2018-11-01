const formQuantity = document.querySelector('.form-quantity');

console.log(formQuantity.value);

if (formQuantity.value > 5) {
    console.log('too many');
}