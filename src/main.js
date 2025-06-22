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

form.addEventListener('submit', search => {
  search.preventDefault();
  page = 1;
  // console.log(search.target.elements[0].value);
  if (search.target.elements[0].value.trim()) {
    searchQuery = search.target.elements[0].value.trim();
    render.clearGallery();
    updatePage();
    // fetchData(search.target.elements[0].value)
    //   .then(res => {
    //     // console.log(res);
    //     render.hideLoader();
    //     render.createGallery(res.data.hits);
    //     if (!res.data.total)
    //       throw new Error(
    //         'Sorry, there are no images matching your search query. Please try again!'
    //       );
    //   })
    //   .catch(err => {
    //     // console.log(err);
    //     iziToast.error({
    //       // title: 'Error',
    //       message: String(err),
    //       position: 'topRight',
    //     });
    //   });
  } else
    iziToast.error({
      message: 'red',
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
    const res = await fetchData(searchQuery, page++),
      {
        data: { hits, total, totalHits },
      } = res;

    // const {
    //   res,
    //   res: {
    //     data: { hits, total, totalHits },
    //   },
    // } = { res: await fetchData(search.target.elements[0].value) };

    // console.log(res);
    if (Math.ceil(total / 15) >= page) render.showLoadMoreButton();
    else
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });

    render.createGallery(res.data.hits);
    if (!res.data.total)
      throw new Error(
        'Sorry, there are no images matching your search query. Please try again!'
      );
  } catch (err) {
    console.log(err);
    // console.log(res, res.data.hits);
    iziToast.error({
      message: String(err),
      position: 'topRight',
    });
  }

  render.hideLoader();
}
