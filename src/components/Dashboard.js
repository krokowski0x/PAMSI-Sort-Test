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
    fetch('/arraysInit')
    .then(msg => this.setState( {arraysReady: true} ));
  }

  render() {
    if (this.state.arraysReady)
      return (
        <main>
          <DescriptionTab />
          <Link to='BubbleSort'>
            <SortTab type='Bubble Sort' worker={this.promiseWorker}/>
          </Link>
          <Link to='InsertionSort'>
            <SortTab type='Insertion Sort' worker={this.promiseWorker}/>
          </Link>
          <Link to='HeapSort'>
            <SortTab type='Heap Sort' worker={this.promiseWorker}/>
          </Link>
          <Link to='MergeSort'>
            <SortTab type='Merge Sort' worker={this.promiseWorker}/>
          </Link>
          <Link to='ShellSort'>
            <SortTab type='Shell Sort' worker={this.promiseWorker}/>
          </Link>
          <Link to='QuickSort'>
            <SortTab type='Quick Sort' worker={this.promiseWorker}/>
          </Link>
          <Link to='IntroSort'>
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
