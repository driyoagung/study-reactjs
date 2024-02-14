import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("constructor");
  }
  componentDidMount() {
    this.setState({ count: 1 });
    console.log("componentDidMount");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
    if (this.state.count === 10) {
      this.setState({ count: 0 });
    }
  }
  render() {
    return (
      <div className="flex items-center">
        <h1 className="mr-5">{this.state.count}</h1>
        <button
          className="bg-black text-white p-3 rounded-3xl hover:bg-red-300 transition ease-in-out"
          onClick={() => this.setState({ count: this.state.count - 1 })}
        >
          Remove from Cart
        </button>
        <button
          className="bg-black text-white p-3 rounded-3xl hover:bg-red-300 ease-in-out"
          onClick={() => this.setState({ count: this.state.count + 1 })}
        >
          Add to Cart
        </button>
        {console.log("render")}
      </div>
    );
  }
}
export default Counter;
