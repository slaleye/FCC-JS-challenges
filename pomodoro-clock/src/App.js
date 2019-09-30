import React from "react";
import moment from "moment";

import "./App.css";

import Control from "./components/Control";
import Setting from "./components/Setting";
import Timer from "./components/Timer";

class App extends React.Component {
  /* Dependency moment.js */
  constructor(props) {
    super(props);
    this.state = {
      breakValue: 5,
      sessionValue: 25,
      time: 25 * 60 * 1000,
      mode: "session",
      style: "text-secondary",
      timerIsActive: false
    };

    this.audioRef = React.createRef();

    this.handleUpdateSetting = this.handleUpdateSetting.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.state.time < 0 && this.state.mode === "session") {
      this.setState({ time: this.state.breakValue * 60 * 1000, mode: "break" });
      this.ringTheBell();
    }
    if (this.state.time < 0 && this.state.mode === "break") {
      this.setState({
        time: this.state.sessionValue * 60 * 1000,
        mode: "session"
      });
      this.ringTheBell();
    }
  }

  ringTheBell() {
    const audioButton = this.audioRef.current;
    audioButton.play();
  }

  handlePlayPause = () => {
    if (this.state.timerIsActive) {
      this.setState({ timerIsActive: false }, () => clearInterval(this.Timer)); // update state and clear Interval
    } else {
      if (!this.state.clicked) {
        this.setState(
          {
            time: this.state.sessionValue * 60 * 1000,
            timerIsActive: true,
            clicked: true
          },
          () =>
            (this.Timer = setInterval(
              () => this.setState({ time: this.state.time - 1000 }),
              1000
            ))
        );
      } else {
        this.setState(
          {
            timerIsActive: true,
            clicked: true
          },
          () =>
            (this.Timer = setInterval(
              () => this.setState({ time: this.state.time - 1000 }),
              1000
            ))
        );
      }
    }
  };

  handleUpdateSetting = (inc, type) => {
    if (inc && this.state[type] === 60) return;
    if (!inc && this.state[type] === 1) return;
    this.setState({ [type]: this.state[type] + (inc ? 1 : -1) });
    if (type === "sessionValue" && inc) {
      this.setState({ time: this.state.time + 60000 });
    } else if (type === "sessionValue" && !inc) {
      this.setState({ time: this.state.time - 60000 });
    }
  };

  handleReset = () => {
    const audioButton = this.audioRef.current;
    this.setState({
      breakValue: 5,
      sessionValue: 25,
      time: 25 * 60 * 1000,
      mode: "session",
      style: "text-secondary",
      timerIsActive: false,
      clicked: false
    });
    audioButton.pause();
    audioButton.currentTime = 0;
    clearInterval(this.Timer);
  };

  render() {
    let formattedTime = this.state.time;

    if (formattedTime === 60 * 60 * 1000) {
      formattedTime = "60:00";
    } else {
      formattedTime = moment(this.state.time).format("mm:ss");
    }
    return (
      <div className="container">
        <h3 className="text-center">Pomodoro Clock</h3>

        <div className="row justify-content-center">
          <div className="text-center">
            <Timer
              time={formattedTime}
              mode={this.state.mode}
              style={this.state.style}
            />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="text-center">
            <Control
              timerIsActive={this.state.timerIsActive}
              handlePlayPauseParent={this.handlePlayPause}
              handleResetParent={this.handleReset}
            />
          </div>
        </div>
        <div className="row text-center justify-content-center">
          <Setting
            type="break"
            label="Break Length"
            value={this.state.breakValue}
            handleValueUpdateParent={this.handleUpdateSetting}
          />
          <Setting
            type="session"
            label="Session Length"
            value={this.state.sessionValue}
            handleValueUpdateParent={this.handleUpdateSetting}
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
