
// Отримуємо елемент ul#categories
const categoriesList = document.querySelector("#categories");

// Знаходимо всі елементи li з класом item
const categoryItems = categoriesList.querySelectorAll(".item");

// Виводимо кількість категорій
console.log(`Number of categories: ${categoryItems.length}`);

// Проходимо по кожному елементу li.item
categoryItems.forEach((item) => {
  // Отримуємо текст заголовка <h2>
  const title = item.querySelector("h2").textContent;

  // Рахуємо кількість вкладених елементів <li>
  const elementsCount = item.querySelectorAll("ul li").length;

  // Виводимо інформацію в консоль
  console.log(`Category: ${title}`);
  console.log(`Elements: ${elementsCount}`);
});
