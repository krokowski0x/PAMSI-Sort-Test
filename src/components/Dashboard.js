import React, { Component } from "react";
import { Link } from 'react-router-dom';
import PromiseWorker from 'promise-worker';

import Placeholder from './Placeholder';
import ArrayWorker from './../workers/arraysInit.worker.js';
import SortTab from './SortTab';
import DescriptionTab from './DescriptionTab';

let worker = new ArrayWorker();
let promiseWorker = new PromiseWorker(worker);

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.worker = promiseWorker;
    this.state = {
      arraysReady: false
    }
  }

  componentDidMount() {
    this.worker.postMessage({work: 'Initialize'})
      .then(msg => this.setState( {arraysReady: true} ));
  }

  render() {
    if (this.state.arraysReady)
      return (
        <main>
          <DescriptionTab />
          <Link to='Bubble_sort'>
            <SortTab type='Bubble Sort' worker={this.promiseWorker}/>
          </Link>
          <Link to='Insertion_sort'>
            <SortTab type='Insertion Sort' worker={this.promiseWorker}/>
          </Link>
          <Link to='Heapsort'>
            <SortTab type='Heap Sort' worker={this.promiseWorker}/>
          </Link>
          <Link to='Merge_sort'>
            <SortTab type='Merge Sort' worker={this.promiseWorker}/>
          </Link>
          <Link to='Shellsort'>
            <SortTab type='Shell Sort' worker={this.promiseWorker}/>
          </Link>
          <Link to='Quicksort'>
            <SortTab type='Quick Sort' worker={this.promiseWorker}/>
          </Link>
          <Link to='Introsort'>
            <SortTab type='Intro Sort' worker={this.promiseWorker}/>
          </Link>
        </main>
      );
    else
      return (
      <main>
        <DescriptionTab />
        <Placeholder />
      </main>
    );
  }
};

export default Dashboard;
