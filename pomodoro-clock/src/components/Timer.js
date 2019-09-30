import React from "react";

class Timer extends React.Component {
  render() {
    let { time, mode, style } = this.props;
    return (
      <div className="card ">
        <div className="card-body">
          <span id="timer-label" className="text-info">
            {mode === "session" ? "Session" : "Break"}
          </span>
          <h2 className={style} id="time-left">
            {time}
          </h2>
        </div>
      </div>
    );
  }
}

export default Timer;
