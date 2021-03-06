import React, { Component } from "react";
import Navitem from "./Navitem";
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      NavItemActive: "",
    };
  }
  activeitem = (x) => {
    if (this.state.NavItemActive.length > 0) {
      document
        .getElementById(this.state.NavItemActive)
        .classList.remove("active");
    }
    this.setState({ NavItemActive: x }, () => {
      document.getElementById(this.state.NavItemActive).classList.add("active");
    });
  };
  render() {
    return (
      <nav>
        <ul>
          <Navitem 
          item="Home" 
          tolink="/" 
          activec={this.activeitem}
          ></Navitem>
          <Navitem
            item="Resume"
            tolink="/resume"
            activec={this.activeitem}
          ></Navitem>
          <Navitem
            item="Skills"
            tolink="/skills"
            activec={this.activeitem}
          ></Navitem>
          <Navitem
            item="Portofolio"
            tolink="/portofolio"
            activec={this.activeitem}
          ></Navitem>

          <Navitem
            item="Blog"
            tolink="/blog"
            activec={this.activeitem}
          ></Navitem>
          <Navitem
            item="Contact"
            tolink="/contact"
            activec={this.activeitem}
          ></Navitem>
        </ul>
      </nav>
    );
  }
}
export default Navbar;