const liItemCount = document.querySelector('#categories');
console.log('Number of categories: ', liItemCount.children.length);

const firstCategory = liItemCount.firstElementChild;
const firstCategoryElementCounts = firstCategory.querySelectorAll('li');
console.log('Category: ', firstCategory.firstElementChild.textContent);
console.log('Elements :', firstCategoryElementCounts.length);

const secondCategory = liItemCount.children[1];
const secondCategoryElementCounts = secondCategory.querySelectorAll('li');
console.log('Category: ', secondCategory.firstElementChild.textContent);
console.log('Elements :', secondCategoryElementCounts.length);

const thirdCategory = liItemCount.lastElementChild;
const thirdCategoryElementCounts = thirdCategory.querySelectorAll('li');
console.log('Category: ', thirdCategory.firstElementChild.textContent);
console.log('Elements :', thirdCategoryElementCounts.length);