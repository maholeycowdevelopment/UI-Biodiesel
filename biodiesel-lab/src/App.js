import React, { Component } from "react";
import "./App.css";
import StationOne from "./components/StationOne";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { currentStation: 0 };
  }

  nextStation() {
    if (this.state.currentStation < 6) {
      this.setState({
        currentStation: ++this.state.currentStation
      });
    }
  }

  render() {
    switch (this.state.currentStation) {
      default:
        return <StationOne />;
      case 0:
        return <StationOne />;
        break;
    }
  }
}

export default App;
