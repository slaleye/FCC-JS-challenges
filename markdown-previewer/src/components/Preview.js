import React, { Component } from "react";

class Preview extends Component {

  render() {
    return (
      <div id="preview" dangerouslySetInnerHTML={{__html : this.props.output}} />
    );
  }
}

export default Preview;
