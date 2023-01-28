// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryListEl = document.querySelector('.gallery');

// Создаю разметку галлереи в HTML
const imgMarcup = createItemImg(galleryItems);
galleryListEl.insertAdjacentHTML('beforeend', imgMarcup);

// Функция для создания разметки изображения
function createItemImg(items) {
  const imgItem = items
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src='${preview}'
      alt='${description}'
    />
  </a>`;
    })
    .join('');

  return imgItem;
}

// Библиотека SimpleLightbox
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
