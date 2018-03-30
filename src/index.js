import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import styles from './styles.scss';

import Dashboard from './components/Dashboard';
import SortTest from './components/SortTest';

import { BubbleSort } from './sorts/BubbleSort';
import { HeapSort } from './sorts/HeapSort';
import { InsertionSort } from './sorts/InsertionSort';
import { MergeSort } from './sorts/MergeSort';
import { QuickSort } from './sorts/QuickSort';
import { ShellSort } from './sorts/ShellSort';
import { IntroSort } from './sorts/IntroSort';

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path='/' component={Dashboard} />
        <Route path='/:sortType' component={SortTest} />
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("app-container"));
