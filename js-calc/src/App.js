import React from "react";
import Display from "./components/Display";
import Keypad from "./components/Keypad";
import "./App.css";

class App extends React.Component {
  buttonsObject = [
    { id: "one", name: "1", type: "number" },
    { id: "two", name: "2", type: "number" },
    { id: "three", name: "3", type: "number" },
    { id: "four", name: "4", type: "number" },
    { id: "five", name: "5", type: "number" },
    { id: "six", name: "6", type: "number" },
    { id: "seven", name: "7", type: "number" },
    { id: "eight", name: "8", type: "number" },
    { id: "nine", name: "9", type: "number" },
    { id: "zero", name: "0", type: "number" },
    { id: "decimal", name: ".", type: "decimal" },
    { id: "add", name: "+", type: "operator" },
    { id: "subtract", name: "-", type: "operator" },
    { id: "multiply", name: "*", type: "operator" },
    { id: "divide", name: "/", type: "operator" },
    { id: "clear", name: "C", type: "clear" },
    { id: "equals", name: "=", type: "equal" }
  ];

  constructor(props) {
    super(props);
    this.state = {
      input: "0",
      result: "0",
      numOp: 0,
      decimalClicked: false
    };
  }

  handleButtonClick = btn => {
    let currInput = this.state.input;
    let currResult = this.state.result;

    switch (true) {
      case btn.type === "number":
        if (currInput !== "0") {
          currInput += btn.name;
          this.setState({
            input: currInput,
            numOp: 0
          });
        } else {
          this.setState({
            input: btn.name,
          });
        }
        break;
      case btn.type === "operator":
        let numOps = this.state.numOp;
        this.setState({
          numOp: this.state.numOp + 1
        });

        let prevOp = currInput[currInput.length - 1];
        let currOp = btn.name;
        let replaced = 0;
       console.log(" NumOp is", numOps);
      //  console.log("Current NumOp is", this.state.numOp);
        console.log("previous op was", prevOp);
        console.log("current op is", currOp);

        if (numOps <= 0) {
          console.log("num op is <= 0, just append", numOps);
          currInput += btn.name;
          this.setState({
            input: currInput,
            decimalClicked: false
          });
        } else if (numOps === 1 && !Number.isInteger(parseInt(prevOp))) {
          console.log("num op is == 1, do condition and replace", numOps);
          
          if ( (prevOp === "-" && currOp !=="-") || (prevOp !== "-" && currOp !=="-" ) || (prevOp === currOp)) {
            console.log('replace!!', prevOp)
            const newInput = currInput.slice(0, currInput.length - 1);
            currInput = newInput;
            currInput += btn.name;
            
          }else{
            currInput += btn.name;    
            replaced = 1;
          }
          this.setState({
            input: currInput,
            decimalClicked: false,
            numOp: this.state.numOp + replaced
          });
        } else if (numOps === 2) {
          console.log("num op is === 2, do condition and replace", numOps);
           if(Number.isInteger(parseInt(currOp))){
             console.log("number");
           }else{
             console.log("not number, replacing !!");
             const newInput = currInput.slice(0, currInput.length - 2);
             currInput = newInput;
             currInput += btn.name;
             this.setState({
              input: currInput,
              decimalClicked: false,
              numOp: 1
            });

           }


        } else if (numOps > 2) {
          console.log("num op is > 2 replace ", numOps);
        }
  

        break;
      case btn.type === "clear":
        this.setState({
          input: "0",
          result: "0",
          numOp: 0,
          decimalClicked: false
        });
        break;
      case btn.type === "equal":
        const evilResult = eval(currInput);
        this.setState({
          input: evilResult,
          result: evilResult,
          numOp: 0,
          decimalClicked: false
        });
        break;
      case btn.type === "decimal":
        if (!this.state.decimalClicked) {
          currInput += ".";
          this.setState({
            input: currInput,
            decimalClicked: true
          });
        }
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <div className="container">
        <div className="card">
          <div className="card-body">
            <h3 className="text-center">Calculator</h3>
            <Display result={this.state.result} input={this.state.input} />
            <Keypad
              buttons={this.buttonsObject}
              handleButtonClickParent={this.handleButtonClick}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
