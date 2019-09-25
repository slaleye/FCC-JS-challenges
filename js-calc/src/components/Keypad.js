import React from "react";
import Button from "./Button";

class Keypad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        {this.props.buttons.map(btnItem => {
          return (
            <Button
              btn={btnItem}
              handleClick={this.props.handleButtonClickParent}
            />
          );
        })}
      </div>
    );
  }
}

export default Keypad;
