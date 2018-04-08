import React, { Component } from "react";
import PromiseWorker from 'promise-worker';
import Placeholder from './Placeholder';
import ArrayWorker from './../workers/arraysInit.worker.js';

const worker = new ArrayWorker();
const promiseWorker = new PromiseWorker(worker);

class SortTest extends Component {
  constructor(props) {
    super(props);
    this.worker = promiseWorker;
    this.state = {
      type: props.match.params.sortType,
      arrays: [],
    };
  }

  componentDidMount() {
    this.worker.postMessage('Hello')
      .then(msg => this.setState( {type: this.state.type, arrays: msg} ));
  }

  render() {
    return Object.keys(this.state.arrays).length ? (
      <div className='sort-tab'>
        <h2>{this.state.type}</h2>
      </div>
    ) : <Placeholder />
  };
};

export default SortTest;
