import React, { Component } from "react";
import StationTwoIMG from "./stationimages/station-two-img.png";
import SidePanelS2 from "./station2/SidePanelS2";

class StationTwo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="left">
          <img src={StationTwoIMG} alt="Station Two Image" />
        </div>
        <div className="right">
          <SidePanelS2 {...this.props} />
        </div>
      </div>
    );
  }
}

export default StationTwo;
