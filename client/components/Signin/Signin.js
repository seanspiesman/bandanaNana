import React from "react";
import SignedIn from "./components/SignedIn";
import SignUp from "./components/SignUpModal";

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showLoginModal: false,
      showSignUpModal: false,
      LoggedIn: false,
    };
  }

  closeLoginModal() {
    this.setState({ showLoginModal: false });
  }

  closeSignUpModal() {
    this.setState({ showSignUpModal: false });
  }

  render() {
    return (
      <>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <a style={{ fontSize: "30px" }} className="navbar-brand" href="#">
                Bandana Nana
              </a>
            </div>
            <SignedIn
              show={this.state.showLogin}
              LoggedIn={this.state.LoggedIn}
            />
          </div>
        </nav>
        <SignUp
          show={this.state.showSignUpModal}
          close={this.closeSignUpModal.bind(this)}
        />
      </>
    );
  }
}

export default Signin;
