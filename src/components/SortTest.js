import React, { Component } from "react";
import Placeholder from './Placeholder';
import ArrayWorker from './../workers/arraysInit.worker.js';

class SortTest extends Component {
  constructor(props) {
    super(props);
    this.worker = new ArrayWorker();
    this.worker.onmessage = (msg) => this.setState( {type: this.state.type, arrays: msg.data} );
    this.state = {
      type: props.match.params.sortType,
      arrays: [],
    };
  }

  componentDidMount() {
    this.worker.postMessage('Hello');
  }

  render() {
    return this.state.arrays.length ? (
      <div className='sort-tab'>
        <h2>{this.state.type}</h2>
      </div>
    ) : <Placeholder />
  };
};

export default SortTest;
