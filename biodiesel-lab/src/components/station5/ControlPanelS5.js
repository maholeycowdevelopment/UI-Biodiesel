import React, { Component } from "react";
import "../compstyles/ControlPanel.css";

class ControlPanelS5 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOption: "option1"
    };

    this.mixReactant = this.mixReactant.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
  }

  mixReactant() {
    let mixVerified = false;

    switch (this.state.selectedOption) {
      case "option1":
        mixVerified = false;
        break;
      case "option2":
        mixVerified = false;
        break;
      case "option3":
        mixVerified = true;
        break;
    }

    if (mixVerified) this.props.criteriaMet();
  }

  handleOptionChange(changeEvent) {
    this.setState({
      selectedOption: changeEvent.target.value
    });
  }

  render() {
    return (
      <div className="control-panel">
        <p className="header-text">
          Time to mix some reactant in! Pick a reactant, specify the percentage
          split and how long to wait after mixing.
        </p>
        <p className="info-text">Reactant: Sodium Methoxide</p>
        <form>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="option1"
                checked={this.state.selectedOption === "option1"}
                onChange={this.handleOptionChange}
              />
              50/50
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
              60/40
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
              80/20
            </label>
          </div>
        </form>
        <button className="control-btn" onClick={this.mixReactant}>
          Mix
        </button>
      </div>
    );
  }
}

export default ControlPanelS5;
