import React, { Component } from "react";
import PromiseWorker from 'promise-worker';
import Placeholder from './Placeholder';
import ArrayWorker from './../workers/arraysInit.worker.js';

const worker = new ArrayWorker();
const promiseWorker = new PromiseWorker(worker);

class SortTest extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.handleClick.bind(this);
    this.worker = promiseWorker;
    this.state = {
      type: props.match.params.sortType
    };
  }

  componentDidMount() {
    this.worker.postMessage({work: 'Initialize'})
      .then(msg => console.log(msg));
  }

  handleClick(e) {
    this.worker.postMessage({work: 'Sort'})
      .then(msg => console.log(msg));
  }

  render() {
    return (
      <div className='sort-tab'>
        <h2>{this.state.type}</h2>
        <button onClick={this.onClick}>Sort!</button>
      </div>
    )
  };
};

export default SortTest;
