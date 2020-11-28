import React, { Dispatch, SetStateAction, useState } from "react";
import { Modal } from "@material-ui/core";

import { Picture, Category } from "../types";
import Thumbnail from "./Thumbnail";
import { capitalize } from "../util/stringUtils";

type GalleryProps = {
  category: Category;
  setCategory: Dispatch<SetStateAction<string>>;
};

/**
 * Gallery is a component that maps thumbnails of pictures
 * Clicking thumbnail shows the image in lightbox
 * TODO: lightbox style
 * TODO: move Modal/lightbox
 * TODO: show description
 * TODO: back button style...
 */
const Gallery: React.FC<GalleryProps> = ({
  category,
  setCategory,
}: GalleryProps) => {
  const [index, setIndex] = useState<number>(0);
  const [open, setOpen] = useState(false);

  const openLightBox = (index: number) => {
    setOpen(true);
    setIndex(index);
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

        <Modal open={open} onClose={() => setOpen(false)}>
          <div className="lightbox-image-container">
            <img
              className="lightbox-image"
              src={category.images[index].url}
              alt={category.images[index].alt}
            />
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Gallery;
