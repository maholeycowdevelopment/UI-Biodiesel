import React, { Component } from "react";
import "../compstyles/ControlPanel.css";

class ControlPanelS8 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="control-panel">
        <p className="header-text">
          Awesome job, you just made a batch of biodiesel!
        </p>
      </div>
    );
  }
}

export default ControlPanelS8;
