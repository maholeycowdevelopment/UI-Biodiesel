import React, { Component } from "react";
import Star from "./stationimages/Star.png";
import SidePanelS8 from "./station8/SidePanelS8";

class StationEight extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <img className="left" src={Star} alt="Gold STar" />
        <div className="right">
          <SidePanelS8 {...this.props} />
        </div>
      </div>
    );
  }
}

export default StationEight;
