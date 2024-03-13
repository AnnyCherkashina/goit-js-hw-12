
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


loader.style.display = 'none';

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

    loader.style.display = 'block';

    try {
        const data = await getPhotos(userSearch, page);

        if (data.hits.length === 0) {
            hideLoadMoreBtn();
            return iziToast.warning({
                titleColor: '#fff',
                messageColor: '#fff',
                backgroundColor: '#ffa000',
                message: `No results found for "${userSearch}". Please try another search.`,
                position: 'topRight',
            });
        }

        renderMarkup(imageEl, data.hits);
        showLoadMoreBtn();
    } catch (error) {
        console.log(error);
        iziToast.error({
            titleColor: '#fff',
            messageColor: '#fff',
            backgroundColor: '#ef4040',
            message: 'Something went wrong.Please try again later.',
            position: 'topRight',
        });
    } finally {
        hideLoader();
    }
});

loadMoreBtn.addEventListener('click', async e => {
    showLoader();

    page += 1;

    try {
        const data = await getPhotos(userSearch, page);

        if (data.hits.length === 0) {
            hideLoadMoreBtn();
            iziToast.info({
                titleColor: '#fff',
                messageColor: '#fff',
                backgroundColor: '#2980b9',
                message: 'You reached the end of results.',
                position: 'topRight',
            });
            return;
        }

        renderMarkup(imageEl, data.hits);


        window.scrollBy({ top: 2 * document.querySelector('.gallery-item').getBoundingClientRect().height, behavior: 'smooth' });
    } catch (error) {
        console.log(error);
        iziToast.error({
            titleColor: '#fff',
            messageColor: '#fff',
            backgroundColor: '#ef4040',
            message: 'Something went wrong. Please try again later.',
            position: 'topRight',
        });
    } finally {
        hideLoader();
    }
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

