import React, { Component } from "react";
import BigReactorHeat from "./stationimages/ReactorBigHeat.png";
import SidePanelS7 from "./station7/SidePanelS7";

class StationSeven extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="left">
          <img src={BigReactorHeat} alt="Heat Reactor" />
        </div>
        <div className="right">
          <SidePanelS7 {...this.props} />
        </div>
      </div>
    );
  }
}

export default StationSeven;
