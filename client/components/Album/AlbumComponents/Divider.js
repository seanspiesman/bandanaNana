import React from "react";

const Divider = ({ image, index, zoom }) => {
  return (
    <div className="album-image-div">
      <img
        className="album-image"
        src={image}
        onClick={() => {
          zoom(image);
        }}
      />
    </div>
  );
};

export default Divider;
