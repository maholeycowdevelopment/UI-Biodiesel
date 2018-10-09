import React, { Component } from "react";
import Map from "./stationimages/moscow-poster.png";
import SidePanelS1 from "./station1/SidePanelS1";

class StationOne extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="left">
          <img src={Map} alt="Map Page" />
        </div>
        <div className="right">
          <SidePanelS1 {...this.props} />
        </div>
      </div>
    );
  }
}

export default StationOne;
