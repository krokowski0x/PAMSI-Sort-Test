import React, { Component } from "react";

class SortTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: props.match.params.sortType,
      arrays: []
    };
  }

  componentDidMount() {
    fetch('/arrays')
      .then(res => res.json())
      .then(arrays => this.setState({type: this.state.type, arrays: arrays.arrays}))
      .then(console.log(this.state));
  }

  render() {
    return (
      <div className='sort-tab'>
        <h2>{this.state.type}</h2>
        <p></p>
      </div>
    );
  };
};

export default SortTest;
