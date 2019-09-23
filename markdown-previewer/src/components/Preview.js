import React, { Component } from "react";

class Preview extends Component {

  render() {
    return (
      <div>
        <textarea cols="40" rows="10" value={this.props.output} id="preview">{this.props.output}</textarea>
      </div>
    );
  }
}

export default Preview;
