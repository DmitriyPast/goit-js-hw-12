// У файлі render-functions.js створи екземпляр SimpleLightbox для роботи з модальним вікном та зберігай функції для відображення елементів інтерфейсу:
// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів <-- Жахлива підказка
// import 'simplelightbox/dist/simple-lightbox.min.css'; <-- I HATE this

const slb = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  // captionDelay: 250,
});

const gallery = document.querySelector('ul.gallery');
// createGallery(images). Ця функція повинна приймати масив images, створювати HTML-розмітку для галереї, додавати її в контейнер галереї та викликати метод екземпляра SimpleLightbox refresh(). Нічого не повертає.
export function createGallery(images) {
  // clearGallery();
  // hideLoader();
  // console.log(gallery);

  gallery.insertAdjacentHTML(
    'beforeend',
    images
      .map(
        ({
          webformatURL,
          largeImageURL,
          tags,
          likes,
          views,
          comments,
          downloads,
        }) => `<li class="gallery-item">
    <a class="gallery-link" href="${largeImageURL}">
      <img
        class="gallery-image"
        src="${webformatURL}"
        data-source="${largeImageURL}"
        alt="${tags}"
      />
    </a>
      <ul class="image-info">
        <li><h4>Likes</h4><p>${likes}</p></li>
        <li><h4>Views</h4><p>${views}</p></li>
        <li><h4>Comments</h4><p>${comments}</p></li>
        <li><h4>Downloads</h4><p>${downloads}</p></li>
      </ul>
  </li>`
      )
      .join('')
  );

  slb.refresh();
}

// clearGallery(). Ця функція нічого не приймає та повинна очищати вміст контейнера галереї. Нічого не повертає.
export const clearGallery = () => (gallery.innerHTML = '');

const loader = document.querySelector('span.loader');
// showLoader(). Ця функція нічого не приймає, повинна додавати клас для відображення лоадера. Нічого не повертає.
export const showLoader = () => loader.classList.remove('hidden');
// hideLoader(). Ця функція нічого не приймає, повинна прибирати клас для відображення лоадера. Нічого не повертає.
export const hideLoader = () => loader.classList.add('hidden');

const loadMore = document.querySelector('button.load-more');
// showLoadMoreButton(). Ця функція нічого не приймає, повинна додавати клас для відображення кнопки Load more. Нічого не повертає.
export const showLoadMoreButton = () => loadMore.classList.remove('hidden');

// hideLoadMoreButton(). Ця функція нічого не приймає, повинна прибирати клас для відображення кнопки Load more. Нічого не повертає.
export const hideLoadMoreButton = () => loadMore.classList.add('hidden');
