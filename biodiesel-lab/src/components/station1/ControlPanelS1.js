import React, { Component } from "react";
import "../compstyles/ControlPanel.css";

class ControlPanelS1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gallonsCollected: 0,
      milesTraveled: 0
    };
  }

  render() {
    return (
      <div className="control-panel">
        <p className="header-text">Location: </p>
        <p className="header-text">Gallons Available: </p>
        <p className="header-text">Distance (mi): </p>
        <p className="info-text">
          Gallons Collected: <span>{this.state.gallonsCollected}</span>
        </p>
        <p className="info-text">
          Distance Traveled (mi): <span>{this.state.milesTraveled}</span>
        </p>
        <div className="arrow-container">
          <i className="arrow-left" />
          <i className="arrow-right" />
        </div>
        <button className="control-btn">Collect</button>
      </div>
    );
  }
}

export default ControlPanelS1;
