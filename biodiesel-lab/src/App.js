import React, { Component } from "react";
import "./App.css";
import StationOne from "./components/StationOne";
import StationTwo from "./components/StationTwo";
import StationThree from "./components/StationThree";
import StationFour from "./components/StationFour";
import StationFive from "./components/StationFive";
import StationSix from "./components/StationSix";
import StationSeven from "./components/StationSeven";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { currentStation: 0 };
  }

  nextStation() {
    if (this.state.currentStation < 6) {
      this.setState({
        currentStation: this.state.currentStation + 1
      });
    }
  }

  render() {
    switch (this.state.currentStation) {
      default:
        return <StationOne nextStation={this.nextStation.bind(this)} />;
      case 0:
        return <StationOne nextStation={this.nextStation.bind(this)} />;
      case 1:
        return <StationTwo nextStation={this.nextStation.bind(this)} />;
      case 2:
        return <StationThree nextStation={this.nextStation.bind(this)} />;
      case 3:
        return <StationFour nextStation={this.nextStation.bind(this)} />;
      case 4:
        return <StationFive nextStation={this.nextStation.bind(this)} />;
      case 5:
        return <StationSix nextStation={this.nextStation.bind(this)} />;
      case 6:
        return <StationSeven nextStation={this.nextStation.bind(this)} />;
    }
  }
}

export default App;
