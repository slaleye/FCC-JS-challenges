import React from "react";

class Timer extends React.Component {
  render() {
    return (
      <div className="card ">
        <div className="card-body">
          <span id="timer-label" className="text-info">
            {this.props.timerValues.mode}
          </span>
          <h2 className={this.props.timerValues.style} id="time-left">
            {this.props.timerValues.minute}:{this.props.timerValues.seconds}
          </h2>
        </div>
      </div>
    );
  }
}

export default Timer;
