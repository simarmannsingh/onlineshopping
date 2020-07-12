import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [{ id: 1, value: 0 }],
  };

  render() {
    return (
      <div>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            item={this.props.item}
            price={this.props.price}
            imglink={this.props.imglink}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
