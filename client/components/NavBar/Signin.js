import React from "react";
import SignedIn from "./components/SignedIn";
import SignUp from "./components/SignUpModal";
import Login from "./components/LoginModal";

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showLoginModal: false,
      showSignUpModal: false,
      LoggedIn: true,
      userInfo: [],
    };
  }

  closeLoginModal() {
    this.setState({ showLoginModal: false });
  }

  openLoginModal() {
    this.setState({ showLoginModal: true });
  }

  closeSignUpModal() {
    this.setState({ showSignUpModal: false });
  }

  openSignUpModal() {
    this.setState({ showSignUpModal: true });
  }

  logOut() {
    this.setState({ LoggedIn: false });
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
              loggedIn={this.state.LoggedIn}
              signup={this.openSignUpModal.bind(this)}
              loginBtn={this.openLoginModal.bind(this)}
              logout={this.logOut.bind(this)}
            />
          </div>
        </nav>
        <SignUp
          show={this.state.showSignUpModal}
          close={this.closeSignUpModal.bind(this)}
        />
        <Login
          show={this.state.showLoginModal}
          close={this.closeLoginModal.bind(this)}
        />
      </>
    );
  }
}

export default Signin;
