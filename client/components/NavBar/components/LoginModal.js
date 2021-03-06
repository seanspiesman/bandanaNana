import React from "react";

const LoginModal = ({ show, close, readUser, readPass, submit }) => {
  if (show) {
    return (
      <div className="signup-modal">
        <form
          onSubmit={() => {
            submit();
          }}
        >
          <div className="signup-modal-main signup-modal-background">
            <div className="row text-center">
              <h1>Login</h1>
            </div>
            <span
              className="signup-close glyphicon glyphicon-remove text-right"
              onClick={() => {
                close();
              }}
            ></span>
            <div className="row">
              <div className="col-xs-3 signup-input-pad"></div>{" "}
              <div className="col-xs-3 signup-input-pad text-right signup-text-size">
                Username:
              </div>
              <div className="col-xs-3 signup-input-pad text-left">
                <input
                  onChange={readUser}
                  className="form-control"
                  placeholder="Type username here..."
                />
              </div>
            </div>
            <div className="row">
              <div className="col-xs-3 signup-input-pad "></div>{" "}
              <div className="col-xs-3 signup-input-pad text-right signup-text-size">
                Password:
              </div>
              <div className="col-xs-3 signup-input-pad text-left">
                <input
                  onChange={readPass}
                  className="form-control"
                  placeholder="Type username here..."
                  type="password"
                />
              </div>
            </div>
            <div className="row text-center" style={{ paddingTop: "20px" }}>
              <button
                className="btn  btn-primary"
                onClick={() => {
                  submit();
                }}
              >
                Submit
              </button>
              {"            "}
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
        </form>
      </div>
    );
  } else {
    return null;
  }
};
export default LoginModal;
