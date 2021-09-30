
const inputValidator = document.querySelector('#validation-input');
const inputElement = document.querySelector('[data-length="6"]');
const validationLength = parseInt(inputElement.dataset.length);

const checkLength = function () {
    if(inputValidator.value.length === validationLength) {
    inputValidator.classList.add('valid')
    } else {
    inputValidator.classList.add('invalid');
    }
}

inputValidator.addEventListener('blur', checkLength);
inputValidator.addEventListener('focus', ()=> {
    inputValidator.classList = '';
});
