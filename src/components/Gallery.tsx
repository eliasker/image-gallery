import React, { Dispatch, SetStateAction, useState } from "react";

import { Picture } from "../types";
import Thumbnail from "./Thumbnail";

type GalleryProps = {
  title: string;
  pictures: Picture[];
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
  title,
  pictures,
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
        <h3>{title}</h3>
        <button onClick={() => setCategory("")}>Back</button>

        {pictures.map((p: Picture, index: number) => (
          <Thumbnail
            openLightBox={openLightBox}
            pictureIndex={index}
            picture={p}
            key={p.id}
          />
        ))}

        {index === null ? null : (
          <img
            src={pictures[index].url}
            alt={pictures[index].alt}
            onClick={() => closeLightBox()}
            className="temp-full-image"
          />
        )}
      </div>
    </div>
  );
};

export default Gallery;
