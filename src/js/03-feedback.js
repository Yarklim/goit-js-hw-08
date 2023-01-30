import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form'); // Ссылка на элемент формы
formEl.addEventListener('input', throttle(onFormData, 500)); // Отслеживаю событие инпут
formEl.addEventListener('submit', onSubmitForm); // Отслеживаю событие сабмит

// Ссылки на инпут и текстовое поле
const inputEmail = document.querySelector('.feedback-form input');
const textareaMessage = document.querySelector('.feedback-form textarea');

// Ключ для хранилища
const STORAGE_KEY = 'feedback-from-state';

const formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; // Объект для хранения значений полей формы

// Сохраняю в объект текущее значение поля формы и записываю объект в локальное хранилище
function onFormData(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

// Очищаю хранилище и поля формы при сабмите, вывожу в консоль объект formData
function onSubmitForm(e) {
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

// Проверяю состояние хранилища и заполняю поля формы
function dataFromLocalStorage() {
  try {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (data?.email) {
      inputEmail.value = data.email;
    }
    if (data?.message) {
      textareaMessage.value = data.message;
    }
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
  }
}

dataFromLocalStorage();
