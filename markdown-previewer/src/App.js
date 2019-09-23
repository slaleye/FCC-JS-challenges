import React, { Component } from "react";
import Editor from "./components/Editor";
import Preview from "./components/Preview";

const marked = require("marked");
marked.setOptions({
  breaks: true
})
const inlineCode= '`const marked = require("marked");`';
const codeBlock= '```javascript \n let { initial, output } = this.state;\n ``` '

const initialText = `
  # A header (H1 size)
  ---
  ## A sub header (H2 size)
  ---
  [A link](https://github.com/slaleye)
  ---
  <code>hello<code>
  ${inlineCode}
  ---
  A code block

   ${codeBlock}
  ---
  A list item 

  1. First ordered list item
  2. Another item
  1. Actual numbers don't matter, just that it's a number


  ---
  A blockquote 

  > Blockquotes are very handy in email to emulate reply text.
  > This line is part of the same quote.

  --- 
  an image

  Inline-style: 
![alt text](https://picsum.photos/id/542/200/200 "Random imgage from Lorem Picsum")

  ---
  **And bolded text.**
  `;

  
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initial: initialText,
      output: ""
    };

    this.updatePreview = this.updatePreview.bind(this);
  }

  updatePreview = previewText => {
    console.log(marked(previewText));
    this.setState({
      output: marked(previewText)
    });
  };
  componentDidMount() {
    this.updatePreview(this.state.initial);
  }
  render() {
    let { initial, output } = this.state;
    return (
      <div className="App">
        <h2>FreeCodeCamp Markdown Previewer</h2>
        <Editor updatePreview={this.updatePreview} input={initial} />
        <Preview output={output} />
      </div>
    );
  }
}

export default App;
