import React, { Component } from "react";
import "./App.css";
import { Grid, Image, Segment } from "semantic-ui-react";
import "semantic-ui-css";
import moscow from "./Images/moscow-poster.jpg";

class App extends Component {
  render() {
    return (
      <div>
        <Grid padded="false" columns={3} divided style={{ height: "100vh" }}>
          <Grid.Row style={{ padding: "0em" }} stretched>
            <Grid.Column style={{ padding: "0em" }} width={12}>
              <Segment style={{ padding: "0em" }}>
                <Image src={moscow} size="massiv" fluid />
              </Segment>
            </Grid.Column>
            <Grid.Column style={{ padding: "0em" }} width={4}>
              <Segment>User input section</Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default App;
