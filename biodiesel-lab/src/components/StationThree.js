import React, { Component } from "react";
import SidePanel from "./shared/SidePanel";

class StationThree extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Station Three</h1>
        <SidePanel />
      </div>
    );
  }
}

export default StationThree;