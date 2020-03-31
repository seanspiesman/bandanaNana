import React from "react";

const SizeChart = ({ show }) => {
  if (show) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <img
              className="size-image all-images"
              src="../../images/BandanaSize.png"
            ></img>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default SizeChart;
