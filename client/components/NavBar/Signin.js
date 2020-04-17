import React from "react";
import SignedIn from "./components/SignedIn";
import SignUp from "./components/SignUpModal";
import Login from "./components/LoginModal";
import Axios from "axios";

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showLoginModal: false,
      showSignUpModal: false,
      LoggedIn: false,
      username: "",
      password: "",
      passwordConfirm: "",
    };
  }

  User(username) {
    this.setState({ username: username.target.value });
  }

  Pass(password) {
    this.setState({ password: password.target.value });
  }
  PassCon(confirm) {
    this.setState({ passwordConfirm: confirm.target.value });
  }

  onSubmit() {
    if (this.state.passwordConfirm.length !== 0 && this.state.showSignUpModal) {
      if (this.state.password !== this.state.passwordConfirm) {
        alert("Your passwords do not match");
      } else {
        Axios.post("BandanaNana.us-east-1.elasticbeanstalk.com/checkforuser", {
          username: this.state.username,
        })
          .then((results) => {
            if (results.data === "NotAvailable") {
              alert("The username you've chosen already exists");
            } else {
              Axios.post("BandanaNana.us-east-1.elasticbeanstalk.com/addUser", {
                username: this.state.username,
                password: this.state.password,
              }).then(() => {
                this.logIn();
                this.props.username(this.state.username);
                console.log("Account Created");
                this.closeSignUpModal();
              });
            }
          })
          .catch((err) => {
            console.log("Error");
          });
      }
    } else {
      Axios.post("BandanaNana.us-east-1.elasticbeanstalk.com/login", {
        username: this.state.username,
        password: this.state.password,
      })
        .then((results) => {
          if (results.data === "Success") {
            this.logIn();
            this.props.username(this.state.username);
            this.closeLoginModal();
          } else {
            alert("Your Password or Username is Incorrect");
          }
        })
        .catch(() => {
          console.log("Error");
        });
    }
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
    window.location.reload();
  }

  logIn() {
    this.setState({ LoggedIn: true });
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
          submit={this.onSubmit.bind(this)}
          readUser={this.User.bind(this)}
          readPass={this.Pass.bind(this)}
          passConfirm={this.PassCon.bind(this)}
          show={this.state.showSignUpModal}
          close={this.closeSignUpModal.bind(this)}
        />
        <Login
          submit={this.onSubmit.bind(this)}
          readUser={this.User.bind(this)}
          readPass={this.Pass.bind(this)}
          show={this.state.showLoginModal}
          close={this.closeLoginModal.bind(this)}
        />
      </>
    );
  }
}

export default Signin;
