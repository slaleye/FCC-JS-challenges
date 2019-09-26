import React from "react";
import "./App.css";

import Control from "./components/Control";
import Setting from "./components/Setting";
import Timer from "./components/Timer";

const clockSettings = {
  break: {
    name: "Break",
    value: 5
  },
  session: {
    name: "Session",
    value: 25
  }
};
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clockSettings: clockSettings,
      timerValues: {
        minute: "25",
        seconds: "00",
        style: "text-secondary"
      },
      break: 5,
      session: 25
    };
    this.audioRef = React.createRef();

    this.handleUpdateSetting = this.handleUpdateSetting.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleSession = this.handleSession.bind(this);
    this.handleUpdateSetting = this.handleUpdateSetting.bind(this);
    this.playSound = this.playSound.bind(this);

  }

  handleReset = () => {
    this.setState({
      clockSettings: clockSettings,
      timerValues: { minute: "25", seconds: "00", style: "text-secondary" }
    });
  }

  handleSession = newMinute => {
    this.setState(prevState => ({
      timerValues: {
        ...prevState.timerValues,
        minute: newMinute
      }
    }));
  }

  playSound = () => {
    const audioButton = this.audioRef.current;
    audioButton.play();
  };

  handleUpdateSetting = newVal => {
    switch (newVal.name) {
      case clockSettings.break.name:
        this.setState(prevState => ({
          clockSettings: {
            ...prevState.clockSettings,
            break: {
              ...prevState.clockSettings.break,
              value: newVal.value
            }
          }
        }));
        break;
      case clockSettings.session.name:
        this.setState(prevState => ({
          clockSettings: {
            ...prevState.clockSettings,
            session: {
              ...prevState.clockSettings.session,
              value: newVal.value
            }
          }
        }));
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <div className="container">
        <h3 className="text-center">Pomodoro Clock</h3>

        <div className="row justify-content-center">
          <div className="text-center">
            <Timer timerValues={this.state.timerValues} />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="text-center">
            <Control handleResetParent={this.handleReset} />
          </div>
        </div>
        <div className="row text-center justify-content-center">
          <Setting
            setting={this.state.clockSettings.break}
            handleUpdateParentState={this.handleUpdateSetting}
          />
          <Setting
            setting={this.state.clockSettings.session}
            handleUpdateParentState={this.handleUpdateSetting}
            handleSessionParent={this.handleSession}
          />
        </div>
        <audio
            id="beep"
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
            ref={this.audioRef}
            type="audio/mpeg"
          >
            Your browser does not support the audio element.
          </audio>
      </div>
    );
  }
}

export default App;
