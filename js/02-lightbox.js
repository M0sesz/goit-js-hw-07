import { galleryItems } from "./gallery-items.js";

const galleryList = document.querySelector(".gallery");

const createGalleryItem = ({ preview, original, description }) => {
  const item = document.createElement("li");
  item.classList.add("gallery__item");

  const link = document.createElement("a");
  link.classList.add("gallery__link");
  link.href = original;

  const image = document.createElement("img");
  image.classList.add("gallery__image");
  image.src = preview;
  image.alt = description;

  link.appendChild(image);
  item.appendChild(link);

  return item;
};

const renderGallery = (items) => {
  const galleryElements = items.map(createGalleryItem);
  galleryList.append(...galleryElements);
};

renderGallery(galleryItems);

const lightbox = new SimpleLightbox(".gallery__link", {
  captions: true,
  captionDelay: 250,
  captionsData: "alt",
});
