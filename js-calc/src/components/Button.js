import React from "react";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.runHandleClick = this.runHandleClick.bind(this);
  }

  runHandleClick = () => {
    this.props.handleClick(this.props.btn);
  };

  render() {
    return (
      <button
        id={this.props.btn.id}
        className={"btn "+this.props.btn.type}
        onClick={this.runHandleClick}
      >
        {this.props.btn.name}
      </button>
    );
  }
}

export default Button;
