import React, { Component } from "react";
import StationSixIMG from "./stationimages/ReactorWaterWash.png";
import SidePanelS6 from "./station6/SidePanelS6";

class StationSix extends Component {
  constructor(props) {
    super(props);
    console.log("Station Six!");
  }

  render() {
    return (
      <div className="container">
        <img className="left" src={StationSixIMG} alt="Station Six Image" />
        <div className="right">
          <SidePanelS6 {...this.props} />
        </div>
      </div>
    );
  }
}

export default StationSix;
