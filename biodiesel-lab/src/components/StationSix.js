import React, { Component } from "react";
import SidePanel from "./shared/SidePanel";

class StationSix extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Station Six</h1>
        <SidePanel {...this.props} />
      </div>
    );
  }
}

export default StationSix;
