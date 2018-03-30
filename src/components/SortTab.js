import React from "react";

const sources = {
  Bubble_Sort: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Bubble_sort_animation.gif/240px-Bubble_sort_animation.gif',
  Insertion_Sort: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Insertion_sort_animation.gif/240px-Insertion_sort_animation.gif',
  Heap_Sort: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Sorting_heapsort_anim.gif',
  Quick_Sort: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Sorting_quicksort_anim.gif/240px-Sorting_quicksort_anim.gif',
  Merge_Sort: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Merge_sort_animation2.gif/240px-Merge_sort_animation2.gif',
  Shell_Sort: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Sorting_shellsort_anim.gif/240px-Sorting_shellsort_anim.gif'
}

const SortTab = (props) => {
  let src = props.type;
  return (
    <div className='sort-tab'>
      <h2>{props.type}</h2>
      <hr />
      <img src={sources[src]} />
    </div>
  );
};

export default SortTab;
