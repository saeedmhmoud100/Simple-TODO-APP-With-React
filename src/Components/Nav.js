import { Component } from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";
class Nav extends Component {
  render() {
    return (
      <nav>
        <NavLink end to="/" className="logo">
          Logo
        </NavLink>
        <div className="links">
          <NavLink to="/component/home">Home</NavLink>
          <NavLink to="/component/about">About</NavLink>
        </div>
      </nav>
    );
  }
}

export default Nav;
