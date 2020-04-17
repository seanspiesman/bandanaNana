import React from "react";

const SignedIn = ({ loggedIn, signup, loginBtn, logout, cart }) => {
  if (loggedIn) {
    return (
      <ul className="nav navbar-nav navbar-right">
        <li
          onClick={() => {
            cart(3);
          }}
        >
          <a href="#">
            <span className="glyphicon glyphicon-shopping-cart"></span> Queue
          </a>
        </li>
        <li>
          <a
            onClick={() => {
              logout();
            }}
            href="#"
          >
            <span className="glyphicon glyphicon-log-out"></span> Login-Out
          </a>
        </li>
      </ul>
    );
  } else {
    return (
      <ul className="nav navbar-nav navbar-right">
        <li>
          <a
            onClick={() => {
              signup();
            }}
            href="#"
          >
            <span className="glyphicon glyphicon-user"></span> Sign Up
          </a>
        </li>
        <li>
          <a
            onClick={() => {
              loginBtn();
            }}
            href="#"
          >
            <span className="glyphicon glyphicon-log-in"></span> Login
          </a>
        </li>
      </ul>
    );
  }
};

export default SignedIn;
