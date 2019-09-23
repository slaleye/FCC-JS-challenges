import React, { Component } from "react";
import Editor from "./components/Editor";
import Preview from "./components/Preview";

//const marked = require("marked");

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      initial:'#Example Heading',
      output:''
    };

    this.updatePreview = this.updatePreview.bind(this);
  }

 
  updatePreview = (previewText) => {
    this.setState({
      output:previewText
    });
  }
  componentDidMount(){
    this.updatePreview(this.state.initial)
  }
  render() {
    return (
      <div className="App">
        <h2>FreeCodeCamp Markdown Previewer</h2>
        <Editor updatePreview={this.updatePreview} input={this.state.initial} />
        <Preview output={this.state.output}/>
      </div>
    );
  }
}

export default App;
