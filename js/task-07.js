//Напиши скрипт, який реагує на зміну значення input#font - size - control(подія input) і змінює інлайн - стиль span#text, оновлюючи властивість font - size.В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

//< input id = "font-size-control" type = "range" min = "16" max = "96" />
//<br />
//<span id="text">Abracadabra!</span>


const inputElMinMax = document.querySelector("#font-size-control")
const spanEl = document.querySelector("#text")
const numberEl = (Number(inputElMinMax.min) + Number(inputElMinMax.max)) / 2 + 'px'

spanEl.style.fontSize = numberEl

inputElMinMax.addEventListener('input', (event) => {
  spanEl.style.fontSize = event.target.value + 'px'

});


