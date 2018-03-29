import React from 'react';
import ReactDOM from 'react-dom';
import styles from './styles.scss';

import SortTab from './components/SortTab';
import DescriptionTab from './components/DescriptionTab';

import { BubbleSort } from './sorts/BubbleSort';
import { HeapSort } from './sorts/HeapSort';
import { InsertionSort } from './sorts/InsertionSort';
import { MergeSort } from './sorts/MergeSort';
import { QuickSort } from './sorts/QuickSort';
import { ShellSort } from './sorts/ShellSort';
import { IntroSort } from './sorts/IntroSort';

const Dashboard = () => {
  return (
    <main>
      <DescriptionTab />
      <SortTab type='Bubble Sort'/>
      <SortTab type='Insertion Sort'/>
      <SortTab type='Heap Sort'/>
      <SortTab type='Merge Sort'/>
      <SortTab type='Shell Sort'/>
      <SortTab type='Quick Sort'/>
      <SortTab type='Introspective Sort'/>
    </main>
  );
};

ReactDOM.render(<Dashboard />, document.getElementById("app-container"));
