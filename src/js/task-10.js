function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controlContainer = document.querySelector('#controls');
const insertBoxes = document.querySelector('#boxes')

const controlContainerElements = {
  controlInput: controlContainer.firstElementChild,
  createBtn: controlContainer.querySelector('[data-create]'),
  destroyBtn: controlContainer.querySelector('[data-destroy]'),
};

const createElementFunction = function (amount) {
  const createdElement = document.createElement('div');
  createdElement.style.width = `${30 + amount * 10}px`;
  createdElement.style.height = `${30 + amount * 10}px`;
  createdElement.style.backgroundColor = `${getRandomHexColor()}`;
  const appendNewEl = insertBoxes.appendChild(createdElement);
  return appendNewEl;
}

const createBoxes = function (amount) {
  for (let i = 0; i < amount; i++) {
    createElementFunction(i);
  }
}

const mainFunction = function () {
  createBoxes(controlContainerElements.controlInput.value);
}

const destroyElementFunction = function () {
  insertBoxes.innerHTML = '';
  controlContainerElements.controlInput.value = '';
};

controlContainerElements.createBtn.addEventListener('click', mainFunction);
controlContainerElements.destroyBtn.addEventListener('click', destroyElementFunction);
