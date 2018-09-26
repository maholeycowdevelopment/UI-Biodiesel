import React, { Component } from "react";
import SidePanel from "./shared/SidePanel";

class StationSeven extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Station Seven</h1>
        <SidePanel {...this.props} />
      </div>
    );
  }
}

export default StationSeven;
