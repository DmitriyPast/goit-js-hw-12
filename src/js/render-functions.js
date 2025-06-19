// У файлі render-functions.js створи екземпляр SimpleLightbox для роботи з модальним вікном та зберігай функції для відображення елементів інтерфейсу:
// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів <-- Жахлива підказка
// import 'simplelightbox/dist/simple-lightbox.min.css'; <-- I HATE this

const gallery = document.querySelector('ul.gallery');
const loader = document.querySelector('span.loader');
// createGallery(images). Ця функція повинна приймати масив images, створювати HTML-розмітку для галереї, додавати її в контейнер галереї та викликати метод екземпляра SimpleLightbox refresh(). Нічого не повертає.
export function createGallery(images) {
  clearGallery();
  //
  // console.log(gallery);

  gallery.innerHTML = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        preview = webformatURL,
        original = largeImageURL,
        description = tags,
        likes,
        views,
        comments,
        downloads,
      }) => `<li class="gallery-item">
    <a class="gallery-link" href="${original}">
      <img
        class="gallery-image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
      <!--<div class="image-info">
      <span>likes: ${likes}</span>
      <span>vievs: ${views}</span>
      <span>comments: ${comments}</span>
      <span">downloads: ${downloads}</span>
      </div>-->
      <ul class="image-info">
        <li><h4>Likes</h4><p>${likes}</p></li>
        <li><h4>Views</h4><p>${views}</p></li>
        <li><h4>Comments</h4><p>${comments}</p></li>
        <li><h4>Downloads</h4><p>${downloads}</p></li>
      </ul>
  </li>`
    )
    .join('');
  // gallery.insertAdjacentHTML(
  //   'afterbegin',
  //   images
  //     .map(
  //       ({ preview, original, description }) => `<li class="gallery-item">
  //   <a class="gallery-link" href="${original}">
  //     <img
  //       class="gallery-image"
  //       src="${preview}"
  //       data-source="${original}"
  //       alt="${description}"
  //     />
  //     fuck
  //     <span>1</span>
  //     <span>2</span>
  //     <span>3</span>
  //     <span>4</span>
  //   </a>
  // </li>`
  //     )
  //     .join('')
  // );
  const slb = new SimpleLightbox('.gallery a', {});
  slb.refresh();
}
// clearGallery(). Ця функція нічого не приймає та повинна очищати вміст контейнера галереї. Нічого не повертає.
export function clearGallery() {
  gallery.innerHTML = '';
  //
}

// showLoader(). Ця функція нічого не приймає, повинна додавати клас для відображення лоадера. Нічого не повертає.
export function showLoader() {
  // gallery.classList.add('.loading');
  // loader.classList.add('.loader-show');
  loader.classList.remove('hidden');
}
// hideLoader(). Ця функція нічого не приймає, повинна прибирати клас для відображення лоадера. Нічого не повертає.
export function hideLoader() {
  // gallery.classList.remove('.loading');
  // loader.classList.remove('.loader-show');
  loader.classList.add('hidden');
}
