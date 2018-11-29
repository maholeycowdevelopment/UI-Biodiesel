import React, { Component } from "react";
import BigReactorHeat from "./stationimages/ReactorBigHeat.png";
import SidePanelS3 from "./station3/SidePanelS3";

class StationThree extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <img className="left" src={BigReactorHeat} alt="Map Page" />
        <div className="right">
          <SidePanelS3 {...this.props} />
        </div>
      </div>
    );
  }
}

export default StationThree;
