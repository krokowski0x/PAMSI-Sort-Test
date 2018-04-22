const { Heapsort } =      require('./HeapSort');
const { InsertionSort } = require('./InsertionSort');
const { Quicksort } =     require('./QuickSort');

Array.prototype.Introsort = function() {
  return IntrospectiveSort(this, this.length, Math.floor(2*Math.log2(this.length)));
}

function IntrospectiveSort (array, N, M) {
  if (N < 16)
    return array.InsertionSort();
  else if (M <= 0)
    return array.Heapsort();
  else
    return array.Quicksort();
}
