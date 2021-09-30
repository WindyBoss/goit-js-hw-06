
const container = document.querySelector('#counter');    
const decrementBtn = container.querySelector('[data-action]');
const incrementBtn = container.lastElementChild;
const value = container.querySelector('#value');



incrementBtn.addEventListener('click', () => {
    incrementValue();
});

decrementBtn.addEventListener('click', () => {
    decrementValue();
});

const decrementValue = function () {
    value.textContent --;
}

const incrementValue = function () {
    value.textContent ++;
}

