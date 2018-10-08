import React, { Component } from "react";
import ControlPanel from "./station1/ControlPanel";
import SidePanel from "./shared/SidePanel";

class StationOne extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="left">
          <h1>Map Page</h1>
        </div>
        <div className="right">
          <ControlPanel />
          <SidePanel {...this.props} />
        </div>
      </div>
    );
  }
}

export default StationOne;
