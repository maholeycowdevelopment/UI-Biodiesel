import React, { Component } from "react";
import "../compstyles/ControlPanel.css";

class ControlPanelS6 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      waterWashCount: 0,
      selectedOption: "option1"
    };

    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.waterWash = this.waterWash.bind(this);
  }

  handleOptionChange(changeEvent) {
    this.setState({
      selectedOption: changeEvent.target.value
    });
  }

  waterWash() {
    let waterWashAmt = 0;

    switch (this.state.selectedOption) {
      case "option1":
        waterWashAmt = 15;
        break;
      case "option2":
        waterWashAmt = 10;
        break;
      case "option3":
        waterWashAmt = 5;
        break;
    }

    this.setState({
      waterWashCount: waterWashAmt
    });

    if (waterWashAmt >= 11) this.props.criteriaMet();
  }

  render() {
    return (
      <div className="control-panel">
        <p className="header-text">
          We need to water wash with 25-50 gallons per wash. How many times
          should we do this?{" "}
        </p>
        <p className="info-text">
          Number of water washes: <span>{this.state.waterWashCount}</span>
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
              11-15
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
              6-10
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
              1-5
            </label>
          </div>
        </form>
        <button className="control-btn" onClick={this.waterWash}>
          Water Wash
        </button>
      </div>
    );
  }
}

export default ControlPanelS6;
