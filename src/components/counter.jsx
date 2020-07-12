import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    id: 1,
  };

  render() {
    return (
      <div>
        {/* <span className={this.getBadgeClasses()}>{this.formatCount()}</span> */}

        {/* <ul>
          {this.state.tasks.map((task) => (
            <li key="task">{task}</li>
          ))}
        </ul> */}

        <div className="card">
          <div className="container">
            <h4>
              <b>{this.props.item}</b>
            </h4>
            <img src={this.props.imglink} alt="" />
            <p>Price : {this.props.price} Euros</p>
          </div>
          <button
            onClick={this.handleAdd}
            className="btn btn-secondary cardbtn"
          >
            Add to Cart
          </button>
        </div>
      </div>
    );
  }

  handleAdd = () => {
    this.setState({ count: this.state.count + 1 });
  };

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
