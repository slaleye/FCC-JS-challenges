import React from "react";

const LENGTH = "Length";
const LABEL = "label";
const INCREMENT = "increment";
const DECREMENT = "decrement";

class Setting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.setting.defaultValue
    };

    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleIncrement = event => {
    const currValue = this.state.value;
    const newValue = currValue + 1 > 60 ? currValue : currValue + 1;
    this.setState({
      value: newValue
    });
  };

  handleDecrement = event => {
    const currValue = this.state.value;
    const newValue = currValue - 1 <= 0 ? currValue : currValue - 1;
    this.setState({
      value: newValue
    });
  };
  
  render() {
    return (
      <div className="col-sm-6">
        <div className="card">
          <div className="card-body">
            <h5
              className="card-title"
              id={(this.props.setting.name + "-" + LABEL).toLowerCase()}
            >
              {this.props.setting.name + " " + LENGTH}
            </h5>
            <div
              className="btn-group"
              role="group"
              aria-label="Increase and Decrease Settings"
            >
              <button
                type="button"
                onClick={this.handleIncrement}
                className="btn btn-secondary"
                id={(this.props.setting.name + "-" + INCREMENT).toLowerCase()}
              >
                <i className="fas fa-sort-up fa-lg" />
              </button>
              <span
                className="btn btn-secondary"
                id={(this.props.setting.name + "-" + LENGTH).toLowerCase()}
              >
                {this.state.value}
              </span>
              <button
                type="button"
                onClick={this.handleDecrement}
                className="btn btn-secondary"
                id={(this.props.setting.name + "-" + DECREMENT).toLowerCase()}
              >
                <i className="fas fa-sort-down fa-lg" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Setting;
