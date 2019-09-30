import React from "react";

class Control extends React.Component {
 
 
  render() {
    let { timerIsActive } = this.props;
    return (
        <div className="alert">

            <div
              className="btn-group"
              role="group"
              aria-label="Pause Resume Rest Clock"
            >
              <button
                type="button"
                onClick={this.props.handlePlayPauseParent}
                className={ timerIsActive ? "btn btn-secondary" : "btn btn-info"}
                id="start_stop"
              >
               { timerIsActive ? "PAUSE" : "START"}
              </button>
              <button
                type="button"
                onClick={this.props.handleResetParent}
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
