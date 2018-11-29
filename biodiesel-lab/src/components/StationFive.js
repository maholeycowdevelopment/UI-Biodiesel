import React, { Component } from "react";
import ReactantImg from "./stationimages/ReactantImg.png";
import SidePanelS5 from "./station5/SidePanelS5";

class StationFive extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <img className="left" src={ReactantImg} alt="Reactant Image" />
        <div className="right">
          <SidePanelS5 {...this.props} />
        </div>
      </div>
    );
  }
}

export default StationFive;
