import React from "react";

const Divider = ({ image }) => {
  return (
    <div className="album-image-div">
      <img className="album-image" src={image} />
    </div>
  );
};

export default Divider;
