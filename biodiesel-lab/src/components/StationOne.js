import React, { Component } from "react";
import ControlPanel from "./station1/ControlPanel";
import SidePanel from "./shared/SidePanel";

class StationOne extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Map Page</h1>
        <ControlPanel />
        <SidePanel />
      </div>
    );
  }
}

export default StationOne;
