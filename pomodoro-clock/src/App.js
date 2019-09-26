import React from "react";
import "./App.css";

import Control from "./components/Control";
import Setting from "./components/Setting";
import Timer from "./components/Timer";

const clockSettings = [
  {
    name: "Break",
    defaultValue: 5
  },
  {
    name: "Session",
    defaultValue: 25
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clockSettings: clockSettings
    };
  }
  render() {
    return (
      <div className="container">
        <h3 className="text-center">Pomodoro Clock</h3>

        <div className="row justify-content-center">
          <div className="text-center">
            <Timer />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="text-center">
            <Control />
          </div>
        </div>
        <div className="row text-center justify-content-center">
          {this.state.clockSettings.map(setting => {
            return <Setting setting={setting} />;
          })}
        </div>
      </div>
    );
  }
}

export default App;
