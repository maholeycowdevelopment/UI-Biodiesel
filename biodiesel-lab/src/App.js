import React, { Component } from "react";
import "./App.css";
import ControlPanel from "./components/station1/ControlPanel";
import SidePanel from "./components/shared/SidePanel";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { currentStation: 0 };
  }

  render() {
    return (
      <div>
        <h1>Map Page</h1>
        <ControlPanel />
        <SidePanel />
      </div>
    );
  }
}

export default App;
