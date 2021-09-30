const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientAllElements = document.querySelector('#ingredients');

for (const ingredient of ingredients) {
  const ingredientElement = document.createElement('li');
  ingredientElement.textContent = ingredient;
  ingredientAllElements.append(ingredientElement);
}

