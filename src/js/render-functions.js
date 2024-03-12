import SimpleLightbox from 'simplelightbox';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

const imageEl = document.querySelector('.gallery');

export function imageTemplate({
  webformatURL,
  largeImageURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) {
  return ` 
  <li class="gallery-item">
    <a class="gallery-link" href="${largeImageURL}">
      <img class="gallery-image" src="${webformatURL}" alt="${tags}" />
      <div class="wrap">
        <p><b>Likes:</b> </br>${likes}</p>
        <p><b>Views:</b> </br>${views}</p>
        <p><b>Coments:</b> </br>${comments}</p>
        <p><b>Downloads:</b> </br>${downloads}</p>
      </div>
    </a>
  </li>`;
}

export function imagesTemplate(arr) {
  return arr.map(imageTemplate).join('');
}

export function renderMarkup(imageEl, arr) {
  imageEl.insertAdjacentHTML('beforeend', imagesTemplate(arr));
  lightbox.refresh();
}