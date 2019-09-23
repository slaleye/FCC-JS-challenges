import React, { Component } from "react";

class Editor extends Component {
  constructor(props) {
    super(props);
     this.state={
         markdown: this.props.input,
     }
    this.updatePreview = this.updatePreview.bind(this);
  }

  // Call UpdatePreview in App.Js with user input
  updatePreview = (e) => {
      this.setState({
        markdown : e.target.value,
      });

    this.props.updatePreview(e.target.value);
  };

  render() {
   let { markdown } = this.state;  
    return (
      <div>
        <textarea cols="40" rows="10" id="editor" value={markdown} onChange={this.updatePreview}>
        </textarea>
      </div>
    );
  }
}

export default Editor;
