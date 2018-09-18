import React, { Component } from 'react';
import './App.css';
import {Grid, Image, Segment} from "semantic-ui-react";
import "semantic-ui-css";



class App extends Component {
  render() {
    return (
      <div>
<Grid columns={3} divided style={{height: '100vh'}}>
    <Grid.Row stretched>

      <Grid.Column width={12}>
        <Segment style={{height: '70%'}}>Image Section</Segment>
        <Segment style={{height: '30%'}}>Text output section</Segment>
      </Grid.Column>
      <Grid.Column width={4}>
        <Segment>User input section</Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>
  </div>
    );
  }
}

export default App;
