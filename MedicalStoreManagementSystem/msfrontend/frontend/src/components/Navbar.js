/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <div className="container-fluid">
          <div className="navbar-header">
            <a href="#" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse"aria-expanded="false"></a>
            <a href="#" className="bars" style={{display: "none"}}></a>
            <a className="navbar-brand" href="index.html">
              Medical Store Management System
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;