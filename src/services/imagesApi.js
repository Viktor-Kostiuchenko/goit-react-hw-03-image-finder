async function fetchImages(name, page) {
  const BASE_URL = 'https://pixabay.com/api/';
  const KEY = '23833327-aee66bbf86a23c3fb1d188dcb';
  const searchParams = new URLSearchParams({
    q: name,
    per_page: 12,
    image_type: 'photo',
    orientation: 'horizontal',
    page: page,
  });

  let url = `${BASE_URL}?key=${KEY}&${searchParams}`;

  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    alert(`Нет картинок по запросу ${name}`);
  }

  //? the way to fetch images just by fetch
  // return fetch('url').then(response => {
  //   if (response.ok) {
  //     return response.json();
  //   }
  //   return Promise.reject(new Error(`Нет картинок по запросу ${name}`));
  // });
  // ?
}

const api = {
  fetchImages,
};

export default api;
