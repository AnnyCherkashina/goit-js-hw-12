import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '42803538-255c2e80da4c06c2048b9f703';

let page = 1;
let perPage = 15;

export async function getPhotos(q) {
    const params = {
        key: API_KEY,
        q,
        _page: page,
        _limit: perPage,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
    };
    const res = await axios.get(`${BASE_URL}/`, { params });
    return res.data;
}