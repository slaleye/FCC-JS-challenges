import React from "react";

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.state = {
      input: "0",
      total: "0",
      hasOperator : false,
      hasDecimal : false
    };
  }
  // have currentnum:0 , user types 1 added to current num

  handleClick = e => {
    if (this.state.input.length === 1 && this.state.input === "0") {
      console.log("0");
      this.setState({
        input: e.target.value,
        hasOperator : false
      });
    } else {
      this.setState({
        input: this.state.input + e.target.value,
        hasOperator : false,
        
      });
    }
  };

  handleOperator = (e) => {
    if(!this.state.hasOperator || e.target.value === '-'){
      this.setState({
        input: this.state.input + e.target.value,
        hasOperator : true,
        hasDecimal: false
      });
    }
  }

  handleReset = e => {
    this.setState({
      input: "0",
      total: "0",
      hasDecimal: false
    });
  };

  handleResult = e => {
   
    if(this.state.total === "0"){
        this.setState({
          total: eval(this.state.input),
          hasDecimal: false
        });
    }else{
      this.setState({
        input: this.state.total,
        total: "0",
        hasDecimal: false
      });
    }
    console.log("total is",this.state.total);
  };

  handleDecimal = e => {
    if (!this.state.hasDecimal) {
      this.setState({
        input: this.state.input + e.target.value,
        hasDecimal: true
      });
    }
  };

  render() {
    const btnStyle = { marginRight: "10px" };
    return (
      <div>
        <h2>Calc</h2>
        <p className="alert alert-success" type="text" id="display">
          {this.state.input}
        </p>
        <p className="alert alert-success" type="text" id="output">
          {this.state.total}
        </p>
        <div className="alert alert-info">
          <button
            className="btn btn-warning"
            onClick={this.handleReset}
            id="clear"
            style={btnStyle}
            value="C"
          >
            C
          </button>

          <button
            className="btn btn-warning"
            onClick={this.handleOperator}
            id="add"
            style={btnStyle}
            value="+"
          >
            +
          </button>
          <button
            className="btn btn-warning"
            onClick={this.handleOperator}
            id="subtract"
            style={btnStyle}
            value="-"
          >
            -
          </button>
          <button
            className="btn btn-warning"
            onClick={this.handleOperator}
            id="multiply"
            style={btnStyle}
            value="*"
          >
            *
          </button>
          <button
            className="btn btn-warning"
            id="divide"
            onClick={this.handleOperator}
            style={btnStyle}
            value="/"
          >
            /
          </button>
          <button
            className="btn btn-warning"
            id="equals"
            onClick={this.handleResult}
            style={btnStyle}
            value="="
          >
            =
          </button>
        </div>

        <div className="alert alert-primary">
          <button
            className="btn btn-info"
            id="zero"
            style={btnStyle}
            value="0"
            onClick={this.handleClick}
          >
            0
          </button>
          <button
            className="btn btn-info"
            id="one"
            style={btnStyle}
            value="1"
            onClick={this.handleClick}
          >
            1
          </button>
          <button
            className="btn btn-info"
            id="two"
            style={btnStyle}
            value="2"
            onClick={this.handleClick}
          >
            2
          </button>
          <button
            className="btn btn-info"
            id="three"
            style={btnStyle}
            value="3"
            onClick={this.handleClick}
          >
            3
          </button>
          <button
            className="btn btn-info"
            id="four"
            style={btnStyle}
            value="4"
            onClick={this.handleClick}
          >
            4
          </button>
          <button
            className="btn btn-info"
            id="five"
            style={btnStyle}
            value="5"
            onClick={this.handleClick}
          >
            5
          </button>
          <button
            className="btn btn-info"
            id="six"
            style={btnStyle}
            value="6"
            onClick={this.handleClick}
          >
            6
          </button>
          <button
            className="btn btn-info"
            id="seven"
            style={btnStyle}
            value="7"
            onClick={this.handleClick}
          >
            7
          </button>
          <button
            className="btn btn-info"
            id="eight"
            style={btnStyle}
            value="8"
            onClick={this.handleClick}
          >
            8
          </button>
          <button
            className="btn btn-info"
            id="nine"
            style={btnStyle}
            value="9"
            onClick={this.handleClick}
          >
            9
          </button>
          <button
            className="btn btn-info"
            id="decimal"
            style={btnStyle}
            value="."
            onClick={this.handleDecimal}
          >
            .
          </button>
        </div>
      </div>
    );
  }
}

export default Calculator;
