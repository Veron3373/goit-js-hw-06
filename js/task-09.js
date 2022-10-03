//Напиши скрипт, який змінює кольори фону елемента < body > через інлайн - стиль по кліку на button.change - color і виводить значення кольору в span.color.

//< div class="widget" >
//  <p>Background color: <span class="color">-</span></p>
//  <button type="button" class="change-color">Change color</button>
//</ >

//  Для генерування випадкового кольору використовуй функцію getRandomHexColor.

//function getRandomHexColor() {
//  return `#${Math.floor(Math.random() * 16777215)
//    .toString(16)
//    .padStart(6, 0)}`;
//}

import { ntc } from './task-09ntc.js'

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function getRandomHexColorr() {
  return `#${Math.floor(Math.random() * 16797215).toString(16)}`;
}

const bodyEl = document.querySelector('body')
const buttonEl = document.querySelector('[type="button"]')
const spanEl = document.querySelector('.color')


buttonEl.addEventListener('click', (event) => {
  let rondomColor = getRandomHexColor()
  let result = ntc.name(rondomColor);

  let rondomColore = getRandomHexColorr()

  let shade_name1 = result[1];
  let shade_name2 = result[3];

  bodyEl.style.background = rondomColor
  spanEl.textContent = rondomColor + ' => ' + shade_name1 + ' (' + shade_name2 + ')'

  bodyEl.style.color = rondomColore
  spanEl.textContent = `${rondomColore} ${shade_name1} (${shade_name2})`

})



