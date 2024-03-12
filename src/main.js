import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { renderMarkup, refreshLightBox } from './js/render-functions';
import { getPhotos } from './js/pixabay-api';

const formElem = document.querySelector('.search-form');
const loader = document.querySelector('.loader');
const imageEl = document.querySelector('.gallery');

formElem.addEventListener('submit', e => {
    e.preventDefault();
    imageEl.innerHTML = '';

    const userSearch = e.target.elements.search.value.trim();
    if (userSearch === '') {
        iziToast.warning({
            titleColor: '#fff',
            messageColor: '#fff',
            backgroundColor: '#ffa000',
            message: 'Please enter a search query',
            position: 'topRight',
        });
        return;
    }

    showLoader();

    getPhotos(userSearch)
        .then(data => {
            if (data.hits.length === 0) {
                return iziToast.error({
                    title: 'Error',
                    titleColor: '#fff',
                    messageColor: '#fff',
                    backgroundColor: '#ef4040',
                    message:
                        'Sorry, there are no images matching your search query. Please try again!',
                    position: 'topRight',
                });

            }
            renderMarkup(imageEl, data.hits);
            refreshLightBox();
        })
        .catch(error => {
            console.log(error);
        })
        .finally(() => {
            hideLoader();
        });

    e.target.reset();
});

function showLoader() {
    if (loader) {
        loader.style.display = 'block';
    }
}

// function hideLoader() {
//     if (loader) {
//         loader.style.display = 'none';
//     }
// }
function hideLoader() {
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.style.display = 'none';
    }
}


document.addEventListener('DOMContentLoaded', hideLoader);