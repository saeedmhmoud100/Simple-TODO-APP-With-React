import { Component } from "react";
import "./nav.css";
class Nav extends Component {
  render() {
    return (
      <nav>
        <a href="/" className="logo">
          Logo
        </a>
        <div className="links">
          <a href="/component/home">Home</a>
          <a href="/component/about">About</a>
        </div>
      </nav>
    );
  }
}

export default Nav;
