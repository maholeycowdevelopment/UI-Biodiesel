import React, { Component } from "react";
import SidePanel from "./shared/SidePanel";
import BigReactor from "./stationimages/ReactorBig.png";
import SidePanelS3 from "./station3/SidePanelS3";

class StationThree extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="left">
          <img src={BigReactor} alt="Map Page" />
        </div>
        <div className="right">
          <SidePanelS3 {...this.props} />
        </div>
      </div>
    );
  }
}

export default StationThree;
