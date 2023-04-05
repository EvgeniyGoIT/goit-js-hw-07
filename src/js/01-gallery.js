import { galleryItems } from './gallery-items.js';

// Change code below this line

console.log(galleryItems);

function createGalleryList (items){
    return items
    .map(({ preview, original, description }) => 
        `<li class="gallery__item>
            <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" data-source="${original}"/>
            </a>
        </li>`)
        .join("");
    };

    const galleryList = document.querySelector(".gallery");
    const galleryItemMarkup = createGalleryList(galleryItems);

    galleryList.insertAdjacentHTML("beforeend", galleryItemMarkup);

function onImgClick (evt) {
    if (evt.target.nodeName !== "IMG"){
        return;
    }

    const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
  `);

    instance.show()
    
   document.addEventListener("keydown", (evt) => {
        if (evt.code === "Escape"){
            instance.close();
        }
    });
  }


    galleryList.addEventListener("click", onImgClick);