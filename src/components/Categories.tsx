import React, { useState } from "react";

import Gallery from "./Gallery";
import { Collection } from "../types";
import { capitalize } from "../util/stringUtils";

/**
 * Component that displays either one thumbnail from each category or
 * Gallery component with images that have matching category
 * Thumbnails have an onClick setState(category)
 * TODO: Kinda messy component...
 */
const Categories: React.FC<Collection> = ({ images }: Collection) => {
  const [categoryName, setCategoryName] = useState("");

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
            onClick={() => setCategoryName(filteredImg.category)}
          />
          <p>{capitalize(filteredImg.category)}</p>
        </div>
      ));
  };

  return (
    <div className="center-container">
      <div className="gallery-container white-background">
        {categoryName ? (
          <Gallery
            category={{
              name: categoryName,
              images: images.filter((img) => img.category === categoryName),
            }}
            setCategory={setCategoryName}
          />
        ) : images[0] ? (
          mapCategories()
        ) : null}
      </div>
    </div>
  );
};

export default Categories;
