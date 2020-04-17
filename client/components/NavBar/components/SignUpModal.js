import React from "react";

const SignInModal = ({
  show,
  close,
  readUser,
  readPass,
  passConfirm,
  submit,
}) => {
  if (show) {
    return (
      <div className="signup-modal">
        <div className="signup-modal-main signup-modal-background">
          <div className="row text-center">
            <h1>Sign up</h1>
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
                placeholder="Type Password here..."
              />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-3 signup-input-pad"></div>{" "}
            <div className="col-xs-3 signup-input-pad text-right signup-text-size">
              Retype Password:
            </div>
            <div className="col-xs-3 signup-input-pad text-left">
              <input
                onChange={passConfirm}
                className="form-control"
                placeholder="Type Password again"
              />
            </div>
          </div>
          <div className="row text-center" style={{ paddingTop: "20px" }}>
            <button
              className="btn btn-primary"
              onClick={() => {
                submit();
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
export default SignInModal;
