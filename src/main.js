
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { renderMarkup } from './js/render-functions';
import { getPhotos } from './js/pixabay-api';

const formElem = document.querySelector('.search-form');
const loader = document.querySelector('.loader');
const imageEl = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-more-btn');

hideLoadMoreBtn();

let userSearch;
let page = 1;
const perPage = 15;

formElem.addEventListener('submit', async e => {
    e.preventDefault();
    imageEl.innerHTML = '';

    page = 1;
    userSearch = e.target.elements.search.value.trim();

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

    try {
        const data = await getPhotos(userSearch, page);
        if (data.hits.length === 0) {
            hideLoadMoreBtn();
            return iziToast.error({
                title: 'Error',
                titleColor: '#fff',
                messageColor: '#fff',
                backgroundColor: '#ef4040',
                message: 'Sorry, there are no images matching your search query. Please try again!',
                position: 'topRight',
            });
        }
        renderMarkup(imageEl, data.hits);
        showLoadMoreBtn();
    } catch (error) {
        console.log(error);
    } finally {
        hideLoader();
    }

    e.target.reset();
});

function showLoader() {
    if (loader) {
        loader.style.display = 'block';
    }
}

function hideLoader() {
    if (loader) {
        loader.style.display = 'none';
    }
}

function hideLoadMoreBtn() {
    if (loadMoreBtn) {
        loadMoreBtn.style.display = 'none';
    }
}

function showLoadMoreBtn() {
    if (loadMoreBtn) {
        loadMoreBtn.style.display = 'block';
    }
}

loadMoreBtn.addEventListener('click', async e => {
    showLoader();

    page += 1;

    const data = await getPhotos(userSearch, page);

    renderMarkup(imageEl, data.hits);

    hideLoader();
});
function scrollBtn() {
    window.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth',
    });
}
loadMoreBtn.addEventListener('click', scrollBtn);