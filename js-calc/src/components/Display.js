import React from "react";

class Display extends React.Component {
  render() {
    return (
      <div className="card-header">
        <ul className="list-group text-right">
          <li id="display" className="list-group-item ">{this.props.input}</li>
          <li  className="list-group-item text-info">{this.props.result}</li>
        </ul>
      </div>
    );
  }
}

export default Display;
