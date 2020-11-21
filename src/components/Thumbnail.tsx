import React from "react";
import { Picture } from "../types";

type ThumbnailProps = {
  picture: Picture;
  pictureIndex: number;
  openLightBox: (index: number) => void;
};

const Thumbnail: React.FC<ThumbnailProps> = ({
  picture,
  pictureIndex,
  openLightBox,
}: ThumbnailProps) => {
  return (
    <div className="thumbnail-container">
      <img
        className="thumbnail clickable"
        src={picture.thumbnail_url ? picture.thumbnail_url : picture.url}
        alt={picture.alt}
        onClick={() => openLightBox(pictureIndex)}
      />
    </div>
  );
};

export default Thumbnail;
