import React from "react";

const Queue = ({ show }) => {
  if (show) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <img
              className="size-image all-images"
              src="http://localhost:3000/images/BandanaSize.png"
            ></img>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Queue;
