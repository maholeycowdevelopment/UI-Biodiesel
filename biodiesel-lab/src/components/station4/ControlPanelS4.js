import React, { Component } from "react";
import "../compstyles/ControlPanel.css";

class ControlPanelS4 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fattyAcidLevel: 23,
      moistureLevel: 1.2,
      shouldTestOil: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.testOil = this.testOil.bind(this);
  }

  handleInputChange(changeEvent) {
    if (changeEvent.target.checked !== this.state.shouldTestOil) {
      this.setState({
        shouldTestOil: !this.state.shouldTestOil
      });
    }
  }

  testOil() {
    let userIsTestingOil = this.state.shouldTestOil;

    if ((this.state.fattyAcidLevel >= 20) | (this.state.moistureLevel >= 1.5)) {
      if (userIsTestingOil) this.props.criteriaMet();
    } else this.props.criteriaMet();
  }

  render() {
    return (
      <div className="control-panel">
        <p className="header-text">
          Test for acide, moisture, and water levels.{" "}
        </p>
        <p className="info-text">
          Fatty Acid Level: <span>{this.state.fattyAcidLevel}</span>
        </p>
        <p className="info-text">
          Moisture Level: <span>{this.state.moistureLevel}</span>
        </p>
        <form>
          <div className="radio">
            <label>
              <input
                type="checkbox"
                value="testOil"
                onChange={this.handleInputChange}
              />
            </label>
            Add oil to batch?
          </div>
        </form>
        <button className="control-btn" onClick={this.testOil}>
          Test Oil
        </button>
      </div>
    );
  }
}

export default ControlPanelS4;
