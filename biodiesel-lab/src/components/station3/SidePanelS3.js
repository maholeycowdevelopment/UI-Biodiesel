import React, { Component } from "react";
import logo from "../shared/BlackUILogo.svg";
import "../shared/SidePanel.css";
import ControlPanelS3 from "./ControlPanelS3";

class SidePanelS3 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      criteriaMet: false
    };

    this.tryNextStation = this.tryNextStation.bind(this);
    this.changeCriteriaMet = this.changeCriteriaMet.bind(this);
  }

  tryNextStation() {
    if (this.state.criteriaMet) this.props.nextStation();
  }

  changeCriteriaMet() {
    this.setState({
      criteriaMet: true
    });
  }

  render() {
    return (
      <div className="side-panel">
        <div className="img-container">
          <img src={logo} alt="University Logo" />
        </div>
        <div className="ctrl-panel-container">
          <ControlPanelS3 criteriaMet={this.changeCriteriaMet} />
        </div>
        <button className="next-btn" onClick={this.tryNextStation}>
          Next
        </button>
      </div>
    );
  }
}

export default SidePanelS3;