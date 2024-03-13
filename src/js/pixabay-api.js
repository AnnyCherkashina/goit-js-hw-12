import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '42803538-255c2e80da4c06c2048b9f703';

let page = 1;
let perPage = 15;

export async function getPhotos(q, page) {
    const params = {
        key: API_KEY,
        q,
        page,
        per_page: perPage,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
    };

    const res = await axios.get(`${BASE_URL}/`, { params });

    if (res.data.totalHits === 0) {
        return { hits: [] };
    }

    return res.data;
}