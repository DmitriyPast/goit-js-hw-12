// Для організації коду використовуй модульність та синтаксис export/import.
import axios from 'axios';

// У файлі pixabay-api.js зберігай функції для виконання HTTP-запитів:

// getImagesByQuery(query). Ця функція повинна приймати один параметр query (пошукове слово, яке є рядком), здійснювати HTTP-запит і повертати значення властивості data з отриманої відповіді.
export default async function getImagesByQuery(query, page = 1) {
  return await axios.get('https://pixabay.com/api/', {
    params: {
      key: '50866310-f6e992bbe1b9ca34c705df120',
      q: query,
      page: page,
      per_page: 15,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });
}
// export default function getImagesByQuery(query) {
//   return axios.get('https://pixabay.com/api/', {
//     params: {
//       key: '50866310-f6e992bbe1b9ca34c705df120',
//       q: query,
//       image_type: 'photo',
//       orientation: 'horizontal',
//       safesearch: true,
//     },
//   });
// }
