import React, { useState } from "react";

import Gallery from "./Gallery";
import CategoryThumbnail from "./CategoryThumbnail";
import { Collection } from "../types";

/**
 * Component that displays either one thumbnail from each category or
 * Gallery component with images that have matching category
 * Thumbnails have an onClick setState(category)
 */
const Categories: React.FC<Collection> = ({ images }: Collection) => {
  const [categoryName, setCategoryName] = useState("");

  /**
   * Function that returns an filtered image array
   * that contains only one image from each category
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
        <CategoryThumbnail
          picture={filteredImg}
          setCategory={setCategoryName}
          key={filteredImg.id}
        />
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
        ) : (
          mapCategories()
        )}
      </div>
    </div>
  );
};

export default Categories;
