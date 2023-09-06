import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css"

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const container = document.querySelector(".gallery");

const markup = createMarkup(galleryItems)

container.insertAdjacentHTML('beforeend', markup);


function createMarkup(array) {
    return array.map(({ preview, original, description }) => {
        return  `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>`
    }).join('');
}

let lightbox = new SimpleLightbox('.gallery a', {captionsData: "alt", captionDelay: 250});