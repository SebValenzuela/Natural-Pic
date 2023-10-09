import React, { useContext } from "react";
import { PhotoContext } from "../context/PhotoContext";
import IconHeart from "./IconHeart";

const Gallery = () => {
  const { photos } = useContext(PhotoContext);

  return (
    <div className="gallery grid-columns-5 p-3">
      {photos.map((photo) => (
        <div className="photo" style={{backgroundImage:`url(${photo.src.tiny})`}} key={photo.id}>
          <IconHeart></IconHeart>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
