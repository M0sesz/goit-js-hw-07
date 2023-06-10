import { galleryItems } from "./gallery-items.js";

const galleryList = document.querySelector(".gallery");

const createGalleryItem = ({ preview, original, description }) => {
  return `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}">
      </a>
    </li>
  `;
};

const renderGallery = (items) => {
  const galleryElements = items.map(createGalleryItem).join("");
  galleryList.innerHTML = galleryElements;
};

renderGallery(galleryItems);

const lightbox = new SimpleLightbox(".gallery__link", {
  captions: true,
  captionDelay: 250,
  captionsData: "alt",
});
