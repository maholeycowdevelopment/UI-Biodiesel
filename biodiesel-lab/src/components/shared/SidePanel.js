import React, { Component } from "react";
import logo from "./BlackUILogo.svg";
import "./SidePanel.css";

class SidePanel extends Component {
  render() {
    return (
      <div className="side-panel">
        <div className="img-container">
          <img src={logo} alt="University Logo" />
        </div>
        <button onClick={this.props.nextStation}>Next</button>
      </div>
    );
  }
}

export default SidePanel;
