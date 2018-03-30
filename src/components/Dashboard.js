import React from "react";
import { Link } from 'react-router-dom';

import SortTab from './SortTab';
import DescriptionTab from './DescriptionTab';

const Dashboard = () => {
  return (
    <main>
      <DescriptionTab />
      <Link to='bubble-sort'>
        <SortTab type='Bubble_Sort'/>
      </Link>
      <Link to='insertion-sort'>
        <SortTab type='Insertion_Sort'/>
      </Link>
      <Link to='heap-sort'>
        <SortTab type='Heap_Sort'/>
      </Link>
      <Link to='merge-sort'>
        <SortTab type='Merge_Sort'/>
      </Link>
      <Link to='shell-sort'>
        <SortTab type='Shell_Sort'/>
      </Link>
      <Link to='quick-sort'>
        <SortTab type='Quick_Sort'/>
      </Link>
      <Link to='introspective-sort'>
        <SortTab type='Introspective_Sort'/>
      </Link>
    </main>
  );
};

export default Dashboard;
