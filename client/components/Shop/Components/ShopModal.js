import React from "react";

const ShopModal = ({ show, close }) => {
  if (show) {
    return (
      <div className="shop-modal">
        <div className="shop-modal-main">
          <span
            className="shop-close-span shop-close glyphicon glyphicon-remove"
            onClick={() => {
              close();
            }}
          ></span>
          <div className="shop-modal-background">
            <div className="row ">
              <div className="col-md-3 info-align">
                <h3>Additional Info</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-md-10" style={{ paddingLeft: "15%" }}>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Add your notes here!"
                  />
                  <span className="input-group-btn">
                    <button className="btn btn-default" type="button">
                      Submit!
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default ShopModal;
