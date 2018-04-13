import React, { Component } from "react";
import { Link } from 'react-router-dom';
import PromiseWorker from 'promise-worker';

import Placeholder from './Placeholder';
import ArrayWorker from './../workers/arraysInit.worker.js';
import SortTab from './SortTab';
import DescriptionTab from './DescriptionTab';

const worker = new ArrayWorker();
const promiseWorker = new PromiseWorker(worker);

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
          <Link to='bubble-sort'>
            <SortTab type='Bubble Sort'/>
          </Link>
          <Link to='insertion-sort'>
            <SortTab type='Insertion Sort'/>
          </Link>
          <Link to='heap-sort'>
            <SortTab type='Heap Sort'/>
          </Link>
          <Link to='merge-sort'>
            <SortTab type='Merge Sort'/>
          </Link>
          <Link to='shell-sort'>
            <SortTab type='Shell Sort'/>
          </Link>
          <Link to='quick-sort'>
            <SortTab type='Quick Sort'/>
          </Link>
          <Link to='intro-sort'>
            <SortTab type='Intro Sort'/>
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
