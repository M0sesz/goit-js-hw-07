import { galleryItems } from "./gallery-items.js";
// Change code below this line
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
  image.setAttribute("data-source", original);

  link.appendChild(image);
  item.appendChild(link);

  return item;
};

const renderGallery = (items) => {
  const galleryElements = items.map(createGalleryItem);
  galleryList.append(...galleryElements);
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
