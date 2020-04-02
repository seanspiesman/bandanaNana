import React from "react";

const SignedIn = ({ LoggedIn }) => {
  if (LoggedIn) {
    return (
      <ul className="nav navbar-nav navbar-right">
        <li>
          <a href="#">
            <span className="glyphicon glyphicon-cog"></span> Settings
          </a>
        </li>
        <li>
          <a href="#">
            <span className="glyphicon glyphicon-log-out"></span> Login-Out
          </a>
        </li>
      </ul>
    );
  } else {
    return (
      <ul className="nav navbar-nav navbar-right">
        <li>
          <a href="#">
            <span className="glyphicon glyphicon-user"></span> Sign Up
          </a>
        </li>
        <li>
          <a href="#">
            <span className="glyphicon glyphicon-log-in"></span> Login
          </a>
        </li>
      </ul>
    );
  }
};

export default SignedIn;
