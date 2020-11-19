import React from "react";

import Gallery from "./Gallery";
import { testPictures } from "../resources/imageProvider";

/**
 * Component that displays all categories
 * TODO: Thumbnail from each category
 * TODO: Which category
 */
const Categories: React.FC = () => {
  return (
    <div>
      <Gallery pictures={testPictures} />
    </div>
  );
};

export default Categories;
