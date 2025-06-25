// У файлі main.js напиши всю логіку роботи додатка. Виклики нотифікацій iziToast, усі перевірки на довжину масиву в отриманій відповіді робимо саме в цьому файлі. Імпортуй в нього функції із файлів pixabay-api.js та render-functions.js та викликай їх у відповідний момент.
// логіку прокручування сторінки (scroll) робимо саме в цьому файлі. Імпортуй в нього функції із файлів pixabay-api.js та render-functions.js та викликай їх у відповідний момент.
import fetchData from './js/pixabay-api';
import * as render from './js/render-functions';
// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('form.form');
let page = 1;
let searchQuery = '';
let totalPages = 0;

form.addEventListener('submit', search => {
  search.preventDefault();
  page = 1;
  totalPages = 0;
  // console.log(search.target.elements[0].value);
  searchQuery = search.target.elements[0].value.trim();
  if (searchQuery) {
    render.clearGallery();

    updatePage();
  } else
    return iziToast.error({
      message: 'Enter search query.',
      position: 'topRight',
    });
});

const loadMoreBtn = document.querySelector('button.load-more');
loadMoreBtn.addEventListener('click', () => {
  // console.log(loadMoreBtn);
  render.hideLoadMoreButton();
  updatePage().then(() => {
    const galleryItem = document.querySelector('li.gallery-item');
    // console.log(galleryItem.getBoundingClientRect().height * 2);//400
    // window.scrollBy(0, 400);
    window.scrollBy({
      top: galleryItem.getBoundingClientRect().height * 2,
      behavior: 'smooth',
    });
  });
  // render.showLoadMoreButton();
});

async function updatePage() {
  render.showLoader();

  try {
    const data = await fetchData(searchQuery, page);
    totalPages = Math.ceil(data.totalHits / 15);

    // console.log(data);
    if (!data.total)
      throw new Error(
        'Sorry, there are no images matching your search query. Please try again!'
      );
    else render.createGallery(data.hits);

    if (totalPages > page) page++ && render.showLoadMoreButton();
    else
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
  } catch (err) {
    // console.log(err);
    // console.log(res, res.data.hits);
    iziToast.error({
      message: String(err),
      position: 'topRight',
    });
  }

  render.hideLoader();
}
