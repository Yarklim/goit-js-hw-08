import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form'); // Ссылка на элемент формы
formEl.addEventListener('input', throttle(onFormData, 500)); // Отслеживаю событие инпут
formEl.addEventListener('submit', onSubmitForm); // Отслеживаю событие сабмит

const formData = {}; // Объект для хранения значений полей формы

// Сохраняю в объект текущее значение поля формы и записываю объект в локальное хранилище
function onFormData(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

// Очищаю хранилище и поля формы при сабмите, вывожу в консоль объект formData
function onSubmitForm(e) {
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

// Проверяю состояние хранилища и заполняю поля формы
(function dataFromLocalStorage() {
  const data = JSON.parse(localStorage.getItem('feedback-form-state'));
  const email = document.querySelector('.feedback-form input');
  const message = document.querySelector('.feedback-form textarea');
  if (data?.email) {
    email.value = data.email;
  }
  if (data?.message) {
    message.value = data.message;
  }
})();
