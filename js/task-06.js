//Напиши скрипт, який під час втрати фокусу на інпуті(подія blur), перевіряє його вміст щодо правильної кількості введених символів.

//< input
//type = "text"
//id = "validation-input"
//data - length="6"
//placeholder = "Please enter 6 symbols"
//  />

//  Яка кількість смиволів повинна бути в інпуті, зазначається в його атрибуті data - length.
//Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
//Для додавання стилів використовуй CSS - класи valid і invalid, які ми вже додали у вихідні файли завдання.

let validationInput = document.querySelector('#validation-input')
validationInput.addEventListener('blur', (event) => {

  const inputValue = event.target.value.length

  if (inputValue === parseInt(event.target.dataset.length)) {
    validationInput.classList.add("valid")
    validationInput.classList.remove("invalid")
    } else {
    validationInput.classList.add("invalid")
    validationInput.classList.remove("valid")
  }
  return inputValue
  });


