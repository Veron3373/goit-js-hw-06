//Напиши скрипт управління формою логіна.

//< form class="email-form" >
//  <label>
//    Email
//    <input type="email" name="email" />
//  </label>
//  <label>
//    Password
//    <input type="password" name="password" />
//  </label>
//  <button type="submit">email</button>
//</ >

//  Обробка відправлення форми form.email - form повинна відбуватися відповідно до події submit.
//Під час відправлення форми сторінка не повинна перезавантажуватися.
//Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
//Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
//Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

const formEl = document.querySelector('.login-form')
const buttonEl = document.querySelector('[type="submit"]')

function handleSubmit(event) {
  event.preventDefault();

  const {
    elements: {
      email,
      password }
  } = formEl;

  if (email.value === "" || password.value === "") {
    alert("Please fill in all the fields!");
  } else {

    const credential = {
      email: email.value,
      password: password.value,
    }

    console.log(credential);
    formEl.reset();
  }

}
buttonEl.addEventListener('click', (handleSubmit));



