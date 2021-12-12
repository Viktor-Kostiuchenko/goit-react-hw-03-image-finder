function fetchImages(name, page) {
  return fetch(
    `https://pixabay.com/api/?q=${name}&page=${page}&key=23833327-aee66bbf86a23c3fb1d188dcb&image_type=photo&orientation=horizontal&per_page=12`,
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`Нет картинок по запросу ${name}`));
  });
}

const api = {
  fetchImages,
};

export default api;
