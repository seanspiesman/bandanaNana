import React from "react";

const SignInModal = ({ show, modalImage, close }) => {
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
                    // onChange={modalInfo}
                  />
                  <span className="input-group-btn">
                    <button
                      className="btn btn-default"
                      type="button"
                      onClick={() => {
                        onSubmit();
                        close();
                      }}
                    >
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
export default SignInModal;
