import React from "react";
import { Link } from 'react-router-dom';

import SortTab from './SortTab';
import DescriptionTab from './DescriptionTab';

const Dashboard = () => {
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
};

export default Dashboard;
