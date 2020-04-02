import React from "react";
import SignedIn from "./components/SignedIn";

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showLoginModal: false,
      showSignupModal: false,
      LoggedIn: true
    };
  }
  render() {
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <a style={{ fontSize: "30px" }} className="navbar-brand" href="#">
              Bandana Nana
            </a>
          </div>
          <SignedIn LoggedIn={this.state.LoggedIn} />
        </div>
      </nav>
    );
  }
}

export default Signin;
