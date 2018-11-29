import React, { Component } from "react";
import "../compstyles/ControlPanel.css";

class ControlPanelS1 extends Component {
  oilLocations = [
    { location: "Idaho Commons", oilAmount: 250, xCoord: 45, yCoord: 45 },
    { location: "Patty's Kitchen", oilAmount: 80, xCoord: 35, yCoord: 35 },
    { location: "Moscow Alehouse", oilAmount: 150, xCoord: 52, yCoord: 40 }
  ];

  constructor(props) {
    super(props);

    this.state = {
      gallonsCollected: 0,
      milesTraveled: 0,
      currentLocation: 0
    };

    this.nextLocation = this.nextLocation.bind(this);
    this.previousLocation = this.previousLocation.bind(this);
    this.collectOil = this.collectOil.bind(this);
  }

  /*****************************************************
   * Increments stations to next station using the oil *
   * locations variable above.                         *
   *****************************************************/
  nextLocation() {
    if (this.state.currentLocation === 2) {
      this.setState({
        currentLocation: 0
      });
    } else {
      this.setState({
        currentLocation: this.state.currentLocation + 1
      });
    }
  }

  /*****************************************************
   * Goes to previous station using the oil locations  *
   * variable above.                                   *
   *****************************************************/
  previousLocation() {
    if (this.state.currentLocation === 0) {
      this.setState({
        currentLocation: 2
      });
    } else {
      this.setState({
        currentLocation: this.state.currentLocation - 1
      });
    }
  }

  /*****************************************************
   * Uses the value of oilAmount from the current      *
   * location to alter the state. Will be used to      *
   * check if user has collected over 400 gallons.     *
   *****************************************************/
  collectOil() {
    let newOilAmount =
      this.state.gallonsCollected +
      this.oilLocations[this.state.currentLocation].oilAmount;
    if (newOilAmount >= 400) this.props.criteriaMet();
    this.setState({
      gallonsCollected:
        this.state.gallonsCollected +
        this.oilLocations[this.state.currentLocation].oilAmount
    });
    this.oilLocations[this.state.currentLocation].oilAmount = 0;
  }

  render() {
    return (
      <div className="control-panel">
        <p className="header-text">
          Location: {this.oilLocations[this.state.currentLocation].location}
        </p>
        <p className="header-text">
          Gallons Available:{" "}
          {this.oilLocations[this.state.currentLocation].oilAmount}
        </p>
        <p className="header-text">Distance (mi): </p>
        <p className="info-text">
          Gallons Collected: <span>{this.state.gallonsCollected}</span>
        </p>
        <div className="arrow-container">
          <button className="triangle-left" onClick={this.previousLocation} />
          <button className="triangle-right" onClick={this.nextLocation} />
        </div>
        <button className="control-btn" onClick={this.collectOil}>
          Collect
        </button>
      </div>
    );
  }
}

export default ControlPanelS1;
