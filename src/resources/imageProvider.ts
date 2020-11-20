import bear from "./images/bear.jpg";
import bear_thumb from "./thumbnails/bear_thumb.jpg";

export const testImage = {
  id: "123",
  alt: "Picture of a bear",
  src: bear,
  thumbnail_src: bear_thumb,
};

export const testArray = [testImage, testImage];

export const testCategory = {
  id: "1",
  title: "Bears",
  pictures: [testImage, testImage],
};
