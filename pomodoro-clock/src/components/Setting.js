import React from "react";

class Setting extends React.Component {
  render() {
    let { type, label, value, handleValueUpdateParent } = this.props;

    return (
      <div className="col-sm-6">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title" id={type + "-label"}>
              {label}
            </h5>
            <div
              className="btn-group"
              role="group"
              aria-label="Increase and Decrease Settings"
            >
              <button
                type="button"
                onClick={() => handleValueUpdateParent(true, `${type}Value`)}
                className="btn btn-secondary"
                id={type + "-increment"}
              >
                <i className="fas fa-sort-up fa-lg" />
              </button>
              <span className="btn btn-secondary" id={type + "-length"}>
                {value}
              </span>
              <button
                type="button"
                onClick={() => handleValueUpdateParent(false, `${type}Value`)}
                className="btn btn-secondary"
                id={type + "-decrement"}
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
