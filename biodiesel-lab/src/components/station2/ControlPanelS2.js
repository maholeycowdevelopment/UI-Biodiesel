import React, { Component } from "react";
import "../compstyles/ControlPanel.css";

class ControlPanelS2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gallonsInReactor: 0,
      selectedOption: "option1"
    };

    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.pumpOil = this.pumpOil.bind(this);
  }

  handleOptionChange(changeEvent) {
    this.setState({
      selectedOption: changeEvent.target.value
    });
  }

  pumpOil() {
    let gallonsToPump = 0;

    switch (this.state.selectedOption) {
      case "option1":
        gallonsToPump = 200;
        break;
      case "option2":
        gallonsToPump = 100;
        break;
      case "option3":
        gallonsToPump = 400;
        break;
    }

    let newOilAmount = this.state.gallonsInReactor + gallonsToPump;

    this.setState({
      gallonsInReactor: newOilAmount
    });

    if (newOilAmount >= 400) this.props.criteriaMet();
  }

  render() {
    return (
      <div className="control-panel">
        <p className="header-text">How many gallons would you like to pump? </p>
        <p className="info-text">
          Gallons in Reactor: <span>{this.state.gallonsInReactor}</span>
        </p>
        <form>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="option1"
                checked={this.state.selectedOption === "option1"}
                onChange={this.handleOptionChange}
              />
              200
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="option2"
                checked={this.state.selectedOption === "option2"}
                onChange={this.handleOptionChange}
              />
              100
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="option3"
                checked={this.state.selectedOption === "option3"}
                onChange={this.handleOptionChange}
              />
              400
            </label>
          </div>
        </form>
        <button className="control-btn" onClick={this.pumpOil}>
          Pump Oil
        </button>
      </div>
    );
  }
}

export default ControlPanelS2;
