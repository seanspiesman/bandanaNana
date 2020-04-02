import React from "react";

const Signin = props => {
  return (
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <a style={{ fontSize: "30px" }} className="navbar-brand" href="#">
            Bandana Nana
          </a>
        </div>
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
      </div>
    </nav>
  );
};

export default Signin;
