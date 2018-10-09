import React, { Component } from "react";
import logo from "../shared/BlackUILogo.svg";
import "../shared/SidePanel.css";
import ControlPanelS3 from "./ControlPanelS3";

class SidePanelS3 extends Component {
  render() {
    return (
      <div className="side-panel">
        <div className="img-container">
          <img src={logo} alt="University Logo" />
        </div>
        <div className="ctrl-panel-container">
          <ControlPanelS3 />
        </div>
        <button onClick={this.props.nextStation}>Next</button>
      </div>
    );
  }
}

export default SidePanelS3;
