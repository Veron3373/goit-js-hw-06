//Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

//< div id = "counter" >
//  <button type="button" data-action="decrement">-1</button>
//  <span id="value">0</span>
//  <button type="button" data-action="increment">+1</button>
//</ >

//  Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
//Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
//Оновлюй інтерфейс новим значенням змінної counterValue.


//*"=============Рішення №1=================");  
let counterValue = 0

const increment = document.querySelector('[data-action="increment"]')
const decrement = document.querySelector('[data-action="decrement"]');

const onTargetButtonClickIncrement = (event) => {
  counterValue = counterValue + 1
  const valueEl = document.querySelector('span')
  valueEl.textContent = counterValue

  valueEl.classList.add("accent-color") //колір
};

increment.addEventListener("click", onTargetButtonClickIncrement);

const onTargetButtonClickDecrement = (event) => {
  counterValue <= 0 ?
    counterValue = 0
    :
  counterValue = counterValue - 1
  const valueEl = document.querySelector('span')
  valueEl.textContent = counterValue

    if (counterValue <1) {
      valueEl.classList.remove("accent-color")
    }
};
decrement.addEventListener("click", onTargetButtonClickDecrement);


//*"=============Рішення №2=================");


let counterValueu = 0

const decrementBty = document.querySelector('[data-action="decremen"]');
const incrementBty = document.querySelector('[data-action="incremen"]')

incrementBty.addEventListener('click', () => {
  counterValueu = counterValueu + 1
  const valueEl = document.querySelector('#values')
  valueEl.innerHTML = counterValueu

});


decrementBty.addEventListener('click', () => {
  counterValueu = counterValueu - 1
  const valueEl = document.querySelector('#values')
  valueEl.innerHTML = counterValueu

});




