import heayoun from "./images/heayoun.png";

const init: { [key: string]: HTMLImageElement } = {};

const imageSrc = {
  heayoun,
};

const CharacterImages = Object.entries(imageSrc).reduce(
  (images, [key, src]) => {
    const image = new Image();
    image.src = src;
    images[key] = image;
    return images;
  },
  init
);

export default CharacterImages;
