// implement a counter
import React from "react";

class App extends React.Component {
  state = {
    count: 0
  };
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.increment} style={{color: "red"}}>+</button>
        <button onClick={this.decrement} style= {{color: "blue"}}>-</button>
      </div>
    );
  }
}

export default App;
