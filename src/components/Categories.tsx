import React, { useState } from "react";

import Gallery from "./Gallery";
import useFirestore from "../hooks/useFirestore";

/**
 * Component that displays a thumbnail from each category
 * Thumbnail has an onClick function displays all images in selected category
 * TODO: Map categories --> thumbnail
 * TODO: Category name/title
 * TODO: Selecting a category to view its pictures in a gallery
 */
const Categories: React.FC = () => {
  const { images } = useFirestore("mountains");
  const [gallery, setGallery] = useState(false);

  return (
    <div className="center-container">
      <div className="gallery-container white-background">
        {images[0] ? (
          <div className="thumbnail-container">
            <img
              className="thumbnail clickable"
              src={images[0].url}
              alt={images[0].alt}
              onClick={() => setGallery(!gallery)}
            />
          </div>
        ) : null}
        {gallery ? <Gallery title={"mountains"} pictures={images} /> : null}
      </div>
    </div>
  );
};

export default Categories;
