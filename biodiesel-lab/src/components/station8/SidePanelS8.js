import React, { Component } from "react";
import logo from "../shared/BlackUILogo.svg";
import "../shared/SidePanel.css";
import ControlPanelS8 from "./ControlPanelS8";

class SidePanelS8 extends Component {
  constructor(props) {
    super(props);

    this.startOver = this.startOver.bind(this);
  }

  startOver() {
    window.location.reload();
  }

  render() {
    return (
      <div className="side-panel">
        <div className="img-container">
          <img src={logo} alt="University Logo" />
        </div>
        <div className="ctrl-panel-container">
          <ControlPanelS8 />
        </div>
        <button className="next-btn" onClick={this.startOver}>
          Try Again
        </button>
      </div>
    );
  }
}

export default SidePanelS8;
