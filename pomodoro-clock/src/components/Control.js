import React from "react";

const START = "START";
const STOP = "STOP";
const START_CLASS = "btn btn-info";
const STOP_CLASS = "btn btn-secondary";
class Control extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        btnText : START,
        btnClass: START_CLASS,
    };
    this.handleStartStop = this.handleStartStop.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleStartStop = event => {
      this.props.handleStartParent();
      this.setState({
          btnText : this.state.btnText === START ? STOP : START,
          btnClass : this.state.btnClass === START_CLASS ? STOP_CLASS : START_CLASS
      });
  };

  handleReset = event => {
    this.props.handleResetParent();
  };

  render() {
    return (
        <div className="alert">

            <div
              className="btn-group"
              role="group"
              aria-label="Pause Resume Rest Clock"
            >
              <button
                type="button"
                onClick={this.handleStartStop}
                className={this.state.btnClass}
                id="start_stop"
              >
               {this.state.btnText}
              </button>
              <button
                type="button"
                onClick={this.handleReset}
                className="btn btn-secondary"
                id="reset"
              >
                <i className="fas fa-undo fa-lg" />
              </button>
            </div>
        </div>
    );
  }
}

export default Control;
