import React, { Component } from "react";
import "./Navbar.css";

export class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="">
          <div className="container">
              <a className="link-logo" href="/">
                <img className="img-src"
                  src="https://cdn.dribbble.com/users/1139587/screenshots/6754780/laced-up-lauren-logosign_4x.png?compress=1&resize=768x576&vertical=top"
                  alt="..."
                />
                <h3>Dictionary</h3>
              </a>
          </div>
          <div className="nav-links" >
              <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
              </ul>
          </div>
          <div className="logout">LOGOUT</div>
        </nav>
      </>
    );
  }
}

export default Navbar;
