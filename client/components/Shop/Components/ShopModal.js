import React from "react";

const ShopModal = ({ show, close, onSubmit, modalInfo }) => {
  if (show) {
    return (
      <div className="shop-modal">
        <div className="shop-modal-main shop-modal-background">
          <div className="row text-center">
            <h3>Additional Information</h3>
          </div>
          <span
            className="shop-close glyphicon glyphicon-remove text-right"
            onClick={() => {
              close();
            }}
          ></span>
          <div className="row" style={{ marginLeft: "40%" }}>
            <div className="col-sm-4">
              <div>
                <input
                  className="form-control"
                  placeholder="Color/Pattern..."
                  onChange={modalInfo}
                />
              </div>
            </div>
          </div>
          <div className="row text-center" style={{ paddingTop: "20px" }}>
            <button
              className="btn btn-primary"
              onClick={() => {
                onSubmit();
                close();
              }}
            >
              Submit
            </button>
            {"             "}
            <button
              className="btn btn-default"
              onClick={() => {
                close();
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default ShopModal;
