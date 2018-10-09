import React, { Component } from "react";
import logo from "../shared/BlackUILogo.svg";
import "../shared/SidePanel.css";
import ControlPanelS2 from "./ControlPanelS2";

class SidePanelS2 extends Component {
  render() {
    return (
      <div className="side-panel">
        <div className="img-container">
          <img src={logo} alt="University Logo" />
        </div>
        <div className="ctrl-panel-container">
          <ControlPanelS2 />
        </div>
        <button onClick={this.props.nextStation}>Next</button>
      </div>
    );
  }
}

export default SidePanelS2;
