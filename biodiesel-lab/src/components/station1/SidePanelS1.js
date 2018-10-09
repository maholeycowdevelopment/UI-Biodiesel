import React, { Component } from "react";
import logo from "../shared/BlackUILogo.svg";
import "../shared/SidePanel.css";
import ControlPanelS1 from "./ControlPanelS1";

class SidePanelS1 extends Component {
  render() {
    return (
      <div className="side-panel">
        <div className="img-container">
          <img src={logo} alt="University Logo" />
        </div>
        <div className="ctrl-panel-container">
          <ControlPanelS1 />
        </div>
        <button onClick={this.props.nextStation}>Next</button>
      </div>
    );
  }
}

export default SidePanelS1;
