
//Завдання 1
//HTML містить список категорій ul#categories.

//Напиши скрипт, який:

//Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
//Для кожного элемента li.item у спику ul#categories, знайде і виведе в консоль текст заголовку елемента(тегу < h2 >) і кількість елементів в категорії(усіх < li >, вкладених в нього).
//В результаті, в консолі будуть виведені наступні повідомлення.

//Number of categories: 3

//Category: Animals
//Elements: 4

//Category: Products
//Elements: 3

//Category: Technologies
//Elements: 5

console.log("=============Рішення №1=================");

const refs = {
  itemEl: document.querySelectorAll(".item"),
  elementEl: document.querySelectorAll(".item h2"),
}
console.log(`Number of categories: ${refs.itemEl.length}`);

const categoryEl = refs.elementEl.forEach(value => {
  console.log(`Category: ${value.textContent}
    Elements: ${value.nextElementSibling.children.length}`
  )
})

console.log("=============Рішення №2=================");

const itemEl = document.querySelectorAll(".item")
console.log(`Number of categories: ${itemEl.length}`);

const elementEl = document.querySelectorAll(".item h2")

const categoryEll = elementEl.forEach(value => {
  console.log(`Category: ${value.textContent}
Elements: ${value.nextElementSibling.children.length}`
  )
})





