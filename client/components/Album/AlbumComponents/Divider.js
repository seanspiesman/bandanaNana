import React from "react";

const Divider = ({ image, index, zoom }) => {
  return (
    <div className="album-image-div">
      <div className="album-spacing">
        <img
          className="album-image"
          src={image}
          onClick={() => {
            zoom(image);
          }}
        />
      </div>
    </div>
  );
};

export default Divider;
