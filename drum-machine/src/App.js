import React, {Component} from "react";

import "./App.css";
import Display from './components/Display';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="drum-machine" className="App">
        <h3>Drum Machine</h3>
        <Display />
      </div>
    );
  }
}

export default App;
