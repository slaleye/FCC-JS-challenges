import React from "react";

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);

    this.state = {
      input: "0",
      total: "0"
    };
  }

  handleClick = e => {
    console.log("clicked");

    this.setState({
      input: e.target.value
    });
  };

  render() {
    const btnStyle = { marginRight: "10px" };
    return (
      <div>
        <h2>Calc</h2>
        <p className="alert alert-success" type="text" id="output">
          {this.state.input}
        </p>
        <p className="alert alert-success" type="text" id="display">
          {this.state.total}
        </p>
        <div className="alert alert-info">
          <button
            className="btn btn-warning"
            onClick={this.handleClick}
            id="clear"
            style={btnStyle}
            value="C"
          >
            C
          </button>

          <button
            className="btn btn-warning"
            onClick={this.handleClick}
            id="add"
            style={btnStyle}
            value="+"
          >
            +
          </button>
          <button
            className="btn btn-warning"
            onClick={this.handleClick}
            id="subtract"
            style={btnStyle}
            value="-"
          >
            -
          </button>
          <button
            className="btn btn-warning"
            onClick={this.handleClick}
            id="multiply"
            style={btnStyle}
            value="*"
          >
            *
          </button>
          <button
            className="btn btn-warning"
            id="divide"
            style={btnStyle}
            value="/"
          >
            /
          </button>
          <button
            className="btn btn-warning"
            id="equals"
            style={btnStyle}
            value="="
          >
            =
          </button>
        </div>

        <div className="alert alert-primary">
          <button className="btn btn-info" id="zero" style={btnStyle} value="0">
            0
          </button>
          <button className="btn btn-info" id="one" style={btnStyle} value="1">
            1
          </button>
          <button className="btn btn-info" id="two" style={btnStyle} value="2">
            2
          </button>
          <button
            className="btn btn-info"
            id="three"
            style={btnStyle}
            value="3"
          >
            3
          </button>
          <button className="btn btn-info" id="four" style={btnStyle} value="4">
            4
          </button>
          <button className="btn btn-info" id="five" style={btnStyle} value="5">
            5
          </button>
          <button className="btn btn-info" id="six" style={btnStyle} value="6">
            6
          </button>
          <button
            className="btn btn-info"
            id="seven"
            style={btnStyle}
            value="7"
          >
            7
          </button>
          <button
            className="btn btn-info"
            id="eight"
            style={btnStyle}
            value="8"
          >
            8
          </button>
          <button className="btn btn-info" id="nine" style={btnStyle} value="9">
            9
          </button>
          <button
            className="btn btn-info"
            id="decimal"
            style={btnStyle}
            value="."
          >
            .
          </button>
        </div>
      </div>
    );
  }
}

export default Calculator;
