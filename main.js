var regForm = document.querySelector('.registerForm');
var result = document.querySelector('.result');
var amount = 0;
regForm.onsubmit = function (e) {
    e.preventDefault();
    var inputs = e.target.elements;
    var change = inputs['exchange'].value;
    amount = inputs[0].value;
    result.innerHTML = amount * change;
}