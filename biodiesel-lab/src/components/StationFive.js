import React, { Component } from "react";
import SidePanel from "./shared/SidePanel";

class StationFive extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Station Five</h1>
        <SidePanel {...this.props} />
      </div>
    );
  }
}

export default StationFive;
