
const categories = document.querySelectorAll('#categories .item');

categories.forEach(category => {
  const titles = category.querySelector('h2').textContent;
  const itemsCount = category.querySelectorAll('ul li').length;
  console.log(`Category: ${titles}`);
  console.log(`Elements: ${itemsCount}`);
});
