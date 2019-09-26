import React from "react";
import "./App.css";

import Control from "./components/Control";
import Setting from "./components/Setting";
import Timer from "./components/Timer";
import Test from "./components/Test";

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

const defaultTimer = {
  time: 25 * 60 * 1000,
  minute: "25",
  seconds: "00",
  style: "text-secondary",
  mode: "Session"
};
class App extends React.Component {
  /* Dependency moment.js */
  constructor(props) {
    super(props);
    this.state = {
      clockSettings: clockSettings,
      timerValues: defaultTimer,
      break: 5,
      session: 25
    };
    this.audioRef = React.createRef();

    this.handleUpdateSetting = this.handleUpdateSetting.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleSession = this.handleSession.bind(this);
    this.handleUpdateSetting = this.handleUpdateSetting.bind(this);
    this.playSound = this.playSound.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
  }

  startTimer = () => {
    switch (this.state.timerValues.mode) {
      case clockSettings.break.name:
        break;
      case clockSettings.session.name:
        this.countDown(this.state.timerValues.minute);
        break;
      default:
        break;
    }
  };

  countDown = min => {
    let minutes = parseInt(min);
    let seconds = minutes * 60;
    if (seconds < 59) {
      // less than a min left
      console.log("less than a min",minutes,seconds);
      this.setState(prevState => ({
        timerValues: {
          ...prevState.timerValues,
          minute: "00",
          seconds: seconds
        }
      }));
    } else {
      // display both min and secs
      console.log("disp both ",minutes,seconds);
      this.setState(prevState => ({
        timerValues: {
          ...prevState.timerValues,
          minute: Math.floor(seconds / 60),
          seconds: seconds - Math.round(minutes * 60)
        }
      }));
    }

    if (minutes < 0) {
      //time's up
      console.log("time's up ",minutes,seconds);
      this.playSound();
      this.setState(prevState => ({
        timerValues: {
          ...prevState.timerValues,
          minute: "00",
          seconds: "00"
        }
      }));
    } else {
      console.log("second -- ",minutes,seconds);
      seconds--;
      setTimeout(this.countDown, 1000);
    }
  };

  handleReset = () => {
    this.setState({
      clockSettings: clockSettings,
      timerValues: defaultTimer
    });
  };

  handleSession = newMinute => {
    this.setState(prevState => ({
      timerValues: {
        ...prevState.timerValues,
        minute: newMinute
      }
    }));
  };

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
  };

  render() {
    return (
      <div className="container">
        <Test />
        <h3 className="text-center">Pomodoro Clock</h3>

        <div className="row justify-content-center">
          <div className="text-center">
            <Timer timerValues={this.state.timerValues} />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="text-center">
            <Control
              handleResetParent={this.handleReset}
              handleStartParent={this.startTimer}
            />
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
          src="https://www.soundjay.com/misc/sounds/bell-ringing-01.mp3"
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
