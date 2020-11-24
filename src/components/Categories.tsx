import React, { useState } from "react";

import Gallery from "./Gallery";
import useFirestore from "../hooks/useFirestore";

/**
 * Component that displays either one thumbnail from each category or
 * Gallery component with images that have right category
 * Thumbnails have an onClick setState(category)
 * TODO: Kinda messy component...
 * TODO: Selecting a category to view its pictures in a gallery
 */
const Categories: React.FC = () => {
  const { images } = useFirestore("pictures");
  const [category, setCategory] = useState("");

  /**
   * Function that returns an filtered image array
   * that contains only one image from each category
   * TODO: Ugly function?
   */
  const mapCategories = () => {
    const uniqueCategories: string[] = [];
    const checkUniqueCategory = (category: string): boolean => {
      if (uniqueCategories.includes(category)) {
        return false;
      } else {
        uniqueCategories.push(category);
        return true;
      }
    };
    return images
      .filter((img) => checkUniqueCategory(img.category))
      .map((filteredImg) => (
        <div className="thumbnail-container" key={filteredImg.id}>
          <img
            className="thumbnail clickable"
            src={filteredImg.url}
            alt={filteredImg.alt}
            onClick={() => setCategory(filteredImg.category)}
          />
          <p>{filteredImg.category}</p>
        </div>
      ));
  };

  return (
    <div className="center-container">
      <div className="gallery-container white-background">
        {category ? (
          <Gallery
            title={category}
            pictures={images.filter((img) => img.category === category)}
            setCategory={setCategory}
          />
        ) : images[0] ? (
          mapCategories()
        ) : null}
      </div>
    </div>
  );
};

export default Categories;
