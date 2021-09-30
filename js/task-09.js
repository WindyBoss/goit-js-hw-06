function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector('.change-color');
const colorName = document.querySelector('.color');
console.log(colorName);
console.log(changeColorBtn);

const changeColor = function () {
  colorName.textContent = getRandomHexColor();
  document.body.style.backgroundColor = getRandomHexColor();
}

changeColorBtn.addEventListener('click', changeColor);

