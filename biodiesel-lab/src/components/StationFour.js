import React, { Component } from "react";
import SidePanel from "./shared/SidePanel";

class StationFour extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Station Four</h1>
        <SidePanel {...this.props} />
      </div>
    );
  }
}

export default StationFour;
