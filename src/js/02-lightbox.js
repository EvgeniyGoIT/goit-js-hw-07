import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

function createGalleryList(item) {
    return item.map(({ preview, original, description }) =>
    `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`).join("");
}

const galleryList = document.querySelector(".gallery");
const galleryItemMarkup = createGalleryList(galleryItems);


galleryList.insertAdjacentHTML("beforeend", galleryItemMarkup);

let options  = {
   caption: function ({ description }){
      return description;
   },
   captionDelay: 250,
   captionPosition: "bottom",
}

let gallery = new SimpleLightbox('.gallery a', options);


gallery.on('shown.simplelightbox', function () {
  
 });