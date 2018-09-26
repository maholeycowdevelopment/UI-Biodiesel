import React, { Component } from "react";
import SidePanel from "./shared/SidePanel";

class StationTwo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Station Two</h1>
        <SidePanel />
      </div>
    );
  }
}

export default StationTwo;
