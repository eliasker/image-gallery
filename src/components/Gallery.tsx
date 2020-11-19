import React, { useState } from "react";
import { Picture } from "../types";

type GalleryProps = {
  pictures: Picture[];
};

type GalleryItemProps = {
  picture: Picture;
  pictureIndex: number;
};

/**
 * Category is a component that maps thumbnails of pictures
 * Clicking thumbnail shows the full image
 * TODO: add lightbox
 * TODO: show description
 * TODO: export GalleryItem
 */
const Gallery: React.FC<GalleryProps> = ({ pictures }: GalleryProps) => {
  const [index, setIndex] = useState<number | null>(null);

  const openLightBox = (index: number) => {
    setIndex(index);
  };

  const closeLightBox = () => {
    setIndex(null);
  };

  const GalleryItem: React.FC<{ picture: Picture; pictureIndex: number }> = ({
    picture,
    pictureIndex,
  }: GalleryItemProps) => {
    return (
      <div className="thumbnail-container">
        <img
          src={picture.thumbnail_src}
          alt={picture.alt}
          onClick={() => openLightBox(pictureIndex)}
        />
      </div>
    );
  };

  return (
    <div className="center-container">
      <div className="gallery-container white-background">
        {pictures.map((p: Picture, index: number) => (
          <GalleryItem picture={p} pictureIndex={index} key={p.id} />
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
