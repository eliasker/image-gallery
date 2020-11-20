import React from "react";

import Gallery from "./Gallery";
import { testCategory } from "../resources/imageProvider";

/**
 * Component that displays all categories
 * TODO: Thumbnail from each category
 * TODO: Map categories
 * TODO: Selecting a category to view its pictures in a gallery
 */
const Categories: React.FC = () => {
  return (
    <div>
      <Gallery title={testCategory.title} pictures={testCategory.pictures} />
    </div>
  );
};

export default Categories;
