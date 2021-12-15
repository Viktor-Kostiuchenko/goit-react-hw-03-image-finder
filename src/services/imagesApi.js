import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const KEY = '23833327-aee66bbf86a23c3fb1d188dcb';

export async function fetchImages(name, page) {
  const searchParams = new URLSearchParams({
    q: name,
    per_page: 12,
    image_type: 'photo',
    orientation: 'horizontal',
    page: page,
  });

  let url = `${BASE_URL}?key=${KEY}&${searchParams}`;

  try {
    const response = await axios.get(url);
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
}
