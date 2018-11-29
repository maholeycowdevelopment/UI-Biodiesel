import React, { Component } from "react";
import BigReactor from "./stationimages/ReactorBig.png";
import SidePanelS4 from "./station4/SidePanelS4";

class StationFour extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <img className="left" src={BigReactor} alt="Map Page" />
        <div className="right">
          <SidePanelS4 {...this.props} />
        </div>
      </div>
    );
  }
}

export default StationFour;
