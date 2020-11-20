import React, { useState } from "react";

import { Picture } from "../types";
import Thumbnail from "./Thumbnail";

type GalleryProps = {
  title: string;
  pictures: Picture[];
};

/**
 * Gallery is a component that maps thumbnails of pictures
 * Clicking thumbnail shows the full image
 * TODO: title
 * TODO: add lightbox
 * TODO: show description
 * TODO: back button to category page
 */
const Gallery: React.FC<GalleryProps> = ({ title, pictures }: GalleryProps) => {
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
        {pictures.map((p: Picture, index: number) => (
          <Thumbnail
            openLightBox={openLightBox}
            picture={p}
            pictureIndex={index}
            key={p.id}
          />
        ))}

        {index === null ? null : (
          <img
            src={pictures[index].src}
            alt={pictures[index].alt}
            onClick={() => closeLightBox()}
          />
        )}
      </div>
    </div>
  );
};

export default Gallery;
