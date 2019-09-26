import React from "react";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="card ">
        <div className="card-body">
          <span id="timer-label" className="text-info">
            Session
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
