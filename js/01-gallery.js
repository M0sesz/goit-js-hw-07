import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryList = document.querySelector(".gallery");

const createGalleryItem = ({ preview, original, description }) => {
  return `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" data-source="${original}">
      </a>
    </li>
  `;
};

const renderGallery = (items) => {
  const galleryElements = items.map(createGalleryItem).join("");
  galleryList.innerHTML = galleryElements;
};

renderGallery(galleryItems);

galleryList.addEventListener("click", (event) => {
  event.preventDefault();

  const target = event.target;

  if (target.nodeName !== "IMG") {
    return;
  }

  const source = target.dataset.source;
  console.log(source);

  const instance = basicLightbox.create(`
    <img src="${source}" alt="Full Image" />
  `);

  instance.show();
});
