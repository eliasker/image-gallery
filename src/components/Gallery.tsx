import React, { Dispatch, SetStateAction, useState } from "react";

import { Picture, Category } from "../types";
import Thumbnail from "./Thumbnail";
import { capitalize } from "../util/stringUtils"


type GalleryProps = {
  category: Category;
  setCategory: Dispatch<SetStateAction<string>>;
};

/**
 * Gallery is a component that maps thumbnails of pictures
 * Clicking thumbnail shows the full image
 * TODO: add lightbox
 * TODO: show description
 * TODO: back button style...
 */
const Gallery: React.FC<GalleryProps> = ({
  category,
  setCategory,
}: GalleryProps) => {
  const [index, setIndex] = useState<number | null>(null);

  const openLightBox = (index: number) => {
    setIndex(index);
  };

  const closeLightBox = () => {
    setIndex(null);
  };

  return (
    <div className="center-container">
      <div className="gallery-container white-background">
        <h3>{capitalize(category.name)}</h3>
        <button onClick={() => setCategory("")}>Back</button>

        {category.images.map((p: Picture, index: number) => (
          <Thumbnail
            openLightBox={openLightBox}
            pictureIndex={index}
            picture={p}
            key={p.id}
          />
        ))}

        {index === null ? null : (
          <img
            src={category.images[index].url}
            alt={category.images[index].alt}
            onClick={() => closeLightBox()}
            className="temp-full-image"
          />
        )}
      </div>
    </div>
  );
};

export default Gallery;
