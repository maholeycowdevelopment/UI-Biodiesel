import React, { Component } from "react";
import "../compstyles/ControlPanel.css";

class ControlPanelS3 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fattyAcidLevel: 23,
      moistureLevel: 1.2
    };
  }

  render() {
    return (
      <div className="control-panel">
        <p className="header-text">
          Test for acide, moisture, and water levels.{" "}
        </p>
        <p className="info-text">
          Fatty Acid Level: <span>{this.state.fattyAcidLevel}</span>
        </p>
        <p className="info-text">
          Moisture Level: <span>{this.state.moistureLevel}</span>
        </p>
        <p>Add Oil to Batch?</p>
        <button className="control-btn">Test Oil</button>
      </div>
    );
  }
}

export default ControlPanelS3;
