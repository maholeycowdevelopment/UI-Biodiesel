import React, { Component } from "react";
import "../compstyles/ControlPanel.css";

class ControlPanelS2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gallonsInReactor: 0
    };
  }

  render() {
    return (
      <div className="control-panel">
        <p className="header-text">How many gallons would you like to pump? </p>
        <p className="info-text">
          Gallons in Reactor: <span>{this.state.gallonsInReactor}</span>
        </p>
        <p>ENTER A NUMBER HERE</p>
        <button className="control-btn">Pump Oil</button>
      </div>
    );
  }
}

export default ControlPanelS2;
