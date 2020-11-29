import React, { Dispatch, SetStateAction } from "react";
import { Picture } from "../types";
import { capitalize } from "../util/stringUtils";

type CThumbnailProps = {
  picture: Picture;
  setCategory: Dispatch<SetStateAction<string>>;
};

const CategoryThumbnail: React.FC<CThumbnailProps> = ({
  picture,
  setCategory,
}: CThumbnailProps) => {
  return (
    <div className="thumbnail-container">
      <img
        className="thumbnail clickable"
        src={picture.thumbnail_url ? picture.thumbnail_url : picture.url}
        alt={picture.alt}
        onClick={() => setCategory(picture.category)}
      />
      <p>{capitalize(picture.category)}</p>
    </div>
  );
};

export default CategoryThumbnail;
