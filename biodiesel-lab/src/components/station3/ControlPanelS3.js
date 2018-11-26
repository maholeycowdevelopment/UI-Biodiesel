import React, { Component } from "react";
import "../compstyles/ControlPanel.css";

class ControlPanelS3 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOption: "option1"
    };

    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.changeCriteriaMet = this.changeCriteriaMet.bind(this);
  }

  handleOptionChange(changeEvent) {
    this.setState({
      selectedOption: changeEvent.target.value
    });
  }

  changeCriteriaMet() {
    if (this.state.selectedOption === "option2") this.props.criteriaMet();
  }

  render() {
    return (
      <div className="control-panel">
        <p className="header-text">
          What temperature should we heat the oil to? (In Celcius)
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
              40℃
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
              60℃
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
              50℃
            </label>
          </div>
        </form>
        <button className="control-btn" onClick={this.changeCriteriaMet}>
          Heat Oil
        </button>
      </div>
    );
  }
}

export default ControlPanelS3;
